"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn, useSession } from "next-auth/react";
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
import { Eye, EyeOff } from "lucide-react";
import { signInSchema } from "@/helpers/validation/landlord/auth";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

type Props = {};

const LandLordSignInCard = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("./");
    }
  });

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      userName: values.userName,
      password: values.password,
    });

    if (res?.error) {
      setLoading(false);
      if (res.error === "CredentialsSignin") {
        toast({
          title: "Invalid credentials",
          description: "Please check your username and password",
        });
        return;
      }
      toast({
        title: "Uh oh! Something went wrong",
        description: res.error,
      });
      if (res?.url) {
        toast({
          title: "Welcome back!",
        });
        setTimeout(() => {
          router.replace("./");
        }, 2000);
      }
    } else {
      console.error(res?.error);
    }
  }

  return (
    <div className="shadow-lg p-10 rounded-md">
      <div className="flex flex-col gap-4 m-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="text-center flex flex-col gap-4">
            <p className="font-bold text-3xl">Sign in</p>
            <p className="font-light text-sm">
              Don&apos;t have an account?{" "}
              <Link href={"./sign-up"} className="underline">
                Sign up
              </Link>
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a unique username" {...field} />
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
                      <div className="relative">
                        <Input
                          placeholder="Enter your password"
                          {...field}
                          type={showPassword ? "text" : "password"}
                        />
                        <button
                          type="button"
                          className="absolute right-0 top-0 mt-3 mr-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" loading={loading}>
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LandLordSignInCard;
