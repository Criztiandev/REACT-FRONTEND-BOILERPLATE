import { Separator } from "@/components/ui/separator";
import RegisterForm from "../containers/form/RegisterForm";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <div className="h-screenitems-center flex justify-center">
      <div className="flex h-screen w-full items-center justify-center">
        <div className="mx-6 flex w-full flex-col gap-4 rounded-lg border bg-white p-6 pt-8 shadow sm:max-w-md">
          <h1 className="mb-4 text-center text-2xl font-bold">
            Create a Free Account
          </h1>
          <RegisterForm />

          <div className="flex flex-col items-center justify-center gap-4">
            <Separator />
            <Link
              to={"/"}
              className="text-center text-sm font-medium text-blue-500 hover:underline hover:underline-offset-4"
            >
              Already have an account ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
