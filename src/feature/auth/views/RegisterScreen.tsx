import RegisterForm from "../components/RegisterForm";

const RegisterScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <RegisterForm
        defaultValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          gender: "male",
          birthDate: new Date(),
        }}
      />
    </div>
  );
};

export default RegisterScreen;
