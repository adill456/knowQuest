"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useAuth } from "@/app/context/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { loginSchema } from "@/schemas/authSchema";

const LoginForm = () => {
  const { login, message } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    await login(data);
  };

  return (
    <div className="flex flex-col gap-2 items-start h-full justify-center">
      <div className="w-full flex flex-col gap-2 px-5">
        <div>
          <h6 className="text-3xl font-bold">Login</h6>
          <p>*Please login to your account for the quizz attempt</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-lg text-base"
                      placeholder="Enter email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-lg text-base"
                      placeholder="Enter password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="default"
              size="lg"
              className={cn(`w-full px-3 py-4 text-xl`)}
            >
              Login
            </Button>
          </form>
        </Form>
        <p className="text-gray-700 text-base text-center">
          {"Don't have an account?"}
          <Button
            onClick={() => router.push("/signup")}
            variant="link"
            className="text-blue-500 px-2 text-base"
          >
            Sign up
          </Button>
        </p>
        <div className="flex  gap-2">
          <Separator className="bg-gray-400 my-4 flex-1" />
          <span className="text-gray-700">OR</span>
          <Separator className="bg-gray-400 my-4 flex-1" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
