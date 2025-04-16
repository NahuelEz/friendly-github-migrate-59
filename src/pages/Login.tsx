
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import GradientBlur from "@/components/ui/GradientBlur";
import { useIsMobile } from "@/hooks/use-mobile";

const loginFormSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      console.log("Login data:", data);
      setTimeout(() => {
        navigate("/dashboard");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="relative w-full flex-grow overflow-hidden">
        <div className="absolute inset-0 z-0">
          <GradientBlur />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-12">
          <h1 
            className="text-[#4F1092] uppercase font-formula-condensed font-bold text-center leading-none absolute scale-y-[2] z-0"
            style={{
              fontFamily: "Formula Condensed-Regular, Helvetica",
              fontSize: isMobile ? "3rem" : "5rem",
              top: isMobile ? "15%" : "10%",
              opacity: 0.9
            }}
          >
            EMPIEZA A CRECER HOY
          </h1>

          <div className="bg-white/90 rounded-lg px-6 md:px-8 shadow-lg w-full max-w-md mt-8 z-20 py-12 md:py-[100px] relative">
            <h2 className="text-[#4F1092] text-xl font-semibold mb-6 text-center">
              Iniciar sesión
            </h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField 
                  control={form.control} 
                  name="email" 
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Nombre de usuario o correo electrónico" 
                          {...field} 
                          className="border-gray-300 focus:border-[#4F1092] focus:ring-[#4F1092]" 
                        />
                      </FormControl>
                    </FormItem>
                  )} 
                />

                <FormField 
                  control={form.control} 
                  name="password" 
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          type="password" 
                          placeholder="Contraseña" 
                          {...field} 
                          className="border-gray-300 focus:border-[#4F1092] focus:ring-[#4F1092]" 
                        />
                      </FormControl>
                    </FormItem>
                  )} 
                />

                <Button 
                  type="submit" 
                  className="w-full bg-[#B762F7] hover:bg-[#9F4FD8] text-white rounded-full py-2" 
                  disabled={isLoading}
                >
                  {isLoading ? "Procesando..." : "iniciar sesión"}
                </Button>

                <div className="text-center">
                  <a href="#" className="text-[#4F1092] text-sm hover:underline">
                    ¿Ha olvidado su contraseña?
                  </a>
                </div>

                <div className="text-center text-sm">
                  <span className="text-gray-500">¿No tienes cuenta? </span>
                  <a href="/registro" className="text-[#4F1092] font-medium hover:underline">
                    Regístrate ahora
                  </a>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
