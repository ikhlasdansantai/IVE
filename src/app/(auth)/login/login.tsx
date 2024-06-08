import CardAuthWrapper from "@/components/layouts/auth/cardWrapper";

function LoginForm() {
  return (
    <h2>Sedang Dibangun</h2>
    // <CardAuthWrapper>
    //   <Form {...form}>
    //     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    //       <FormField
    //         control={form.control}
    //         name="email"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Email</FormLabel>
    //             <FormControl>
    //               <Input {...field} placeholder="Enter your email" />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       ></FormField>
    //       <FormField
    //         control={form.control}
    //         name="password"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Password</FormLabel>
    //             <FormControl>
    //               <Input {...field} placeholder="Enter your Password" />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       ></FormField>
    //       <FormSuccess message={success} />
    //       <FormError message={error} />
    //       <Button type="submit" className="w-full">
    //         Login
    //       </Button>
    //     </form>
    //   </Form>
    // </CardAuthWrapper>
  );
}

export default function login() {
  return <LoginForm />;
}
