import { Link } from "react-router-dom";
import LoginForm from "../containers/form/LoginForm";
import { Separator } from "@/components/ui/separator";

const LoginScreen = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full flex-col gap-4 rounded-lg border bg-white p-6 pt-8 shadow sm:max-w-md">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Sign in to your account
        </h1>
        <LoginForm />

        <div className="flex flex-col items-center justify-center gap-4">
          <Separator />
          <Link
            to={"/register"}
            className="text-center text-sm font-medium text-blue-500 hover:underline hover:underline-offset-4"
          >
            Dont have an account ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
