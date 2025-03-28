import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
//import { faker } from "@faker-js/faker";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/utils/actions";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckBoxInput";
import ImageInput from "@/components/form/ImageInput";

/*
const createProductAction = async (FormData: FormData) => {
  "use server";
  const name = FormData.get("name") as string;
  console.log(name);
};
*/

function CreateProductPage() {
  //const name = faker.commerce.productName(); defaultValue={name}
  //const company = faker.company.name();
  //const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="product name"
              
            />
            <FormInput
              type="text"
              name="company"
              label="company"
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>

          <SubmitButton text="Create Product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProductPage;
