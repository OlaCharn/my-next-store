'use server';

import db from "@/utils/db"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { imageSchema, productSchema, validateWithZodSchema } from "./schemas";
import { uploadImage } from "./supabase";

// helper function
const getAuthUser = async () => {
  const user = await currentUser();
  if(!user) redirect("/"); // if there is no user we stop the execution
  return user;
};

//additional check
const getAdminUser = async() => {
  const user = await getAuthUser();
  if(user.id !== process.env.ADMIN_USER_ID) redirect("/");
  return user;
}

// helper function
const renderError = (error: unknown) : {message: string} => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "an error occured",
  };
}

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
  return await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect('/products');
  }
  return product;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser(); 
  try {
    /*
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const price = Number(formData.get("price") as string);
    // temp
    const image = formData.get("image") as File;
    const description = formData.get("description") as string;
    const featured = Boolean(formData.get("featured") as string);
    */
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    const validatedFields = validateWithZodSchema(productSchema, rawData);
    const validatedFile = validateWithZodSchema(imageSchema, {image: file})
    //console.log(validatedFile)
    const fullPath = await uploadImage(validatedFile.image)
    
    await db.product.create({
      data: {
        ...validatedFields,
        image: fullPath,
        clerkId: user.id,
      },
    })
    /*
    await db.product.create({
      data: {
        name,
        company,
        price,
        image: "/images/catman.webp",
        description,
        featured,
        clerkId: user.id, // definetly should be a user to execute
      },
    })
    */
    //return{message: "product created"}
  } catch (error) {

    return renderError(error)
  }
  redirect("/admin/products") //If we were successful we nabigate to list of products
};

export const fetchAdminProducts = async() => {
  await getAdminUser();
  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    }
  });
  return products;
}