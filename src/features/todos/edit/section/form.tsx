import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SheetClose } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useFindTodoById, useUpdateTodo } from "@/modules/todos/query";
import { todoUpdateValidation } from "@/modules/todos/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = todoUpdateValidation;

export const FormSection = ({ id }: { id: string }) => {
  const { data } = useFindTodoById(id);

  const form = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    form.reset(data?.todo);

    return () => {
      form.reset();
    };
  }, [form, data]);

  const { mutateAsync, isPending } = useUpdateTodo();

  const handleSubmit = async (values: z.infer<typeof schema>) => {
    const res = await mutateAsync({ id, values });

    if (res?.success) {
      form.reset();
    }
  };

  const disabled = useMemo(() => isPending, [isPending]);

  return (
    <Form {...form}>
      <form
        className="p-3 space-y-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={disabled}
                  value={field.value || ""}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={disabled}
                  value={field.value || ""}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="space-x-3">
          <Button type="submit">Update</Button>
          <SheetClose asChild>
            <Button type="button" variant={"secondary"}>
              Close
            </Button>
          </SheetClose>
        </div>
      </form>
    </Form>
  );
};
