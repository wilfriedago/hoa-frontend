import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useGetBloodGroupsQuery } from '@/features/blood-groups';

const registerDonorSchema = z.object({
  name: z.string().min(2).max(255),
  phone: z.string().min(10).max(255)
});

export const RegisterDonorForm = () => {
  const form = useForm<z.infer<typeof registerDonorSchema>>({
    resolver: zodResolver(registerDonorSchema),
    defaultValues: {
      name: '',
      phone: ''
    }
  });

  function onSubmit(values: z.infer<typeof registerDonorSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const { data: bloodGroups } = useGetBloodGroupsQuery();

  return (
    <Form {...form}>
      <p className="mb-2 text-sm text-gray-600">
        Les champs obligatoires sont marqués par&nbsp;
        <span className="text-red-600">*</span>
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-start">
            <span className="bg-white pr-3 text-base font-medium text-gray-900 sm:text-lg">Contact et adresse</span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom & Prénom(s)</FormLabel>
                  <FormControl>
                    <Input placeholder="ALI Abdul" {...field} />
                  </FormControl>
                  <FormDescription>
                    Votre nom et prénom(s) tels qu&apos;ils apparaissent sur votre carte d&apos;identité.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-3">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de téléphone</FormLabel>
                  <FormControl>
                    <Input placeholder="06 12 34 56 78" {...field} type="tel" />
                  </FormControl>
                  <FormDescription>Votre numéro de téléphone portable. Nous vous contacterons par SMS.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-3">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse</FormLabel>
                  <FormControl>
                    <Input placeholder="1 rue de la Paix" {...field} />
                  </FormControl>
                  <FormDescription>Votre adresse postale.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-3">
            <FormField
              control={form.control}
              name="bloodGroup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {bloodGroups?.data.map(bloodGroup => (
                        <SelectItem key={bloodGroup.id} value={bloodGroup.id}>
                          {`${bloodGroup.name} (${bloodGroup.description})`}
                        </SelectItem>
                      ))}
                      <SelectItem value="none">Je ne connais pas mon groupe sanguin</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    You can manage email addresses in your <Link href="/examples/forms">email settings</Link>.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
