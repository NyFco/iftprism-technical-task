"use client";

import { loginSchema } from "@/api/auth/auth.schema";
import { useLogin } from "@/api/auth/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const loginMutation = useLogin();

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutateAsync(data).then((response) => {
      const role = response?.user?.role;

      if (role === "admin") {
        router.replace("/admin-dashboard");
      } else {
        router.replace("/user-dashboard");
      }
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-gray-700 text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-6 bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" {...register("username")} />
          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={loginMutation.isLoading}
        >
          {loginMutation.isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
