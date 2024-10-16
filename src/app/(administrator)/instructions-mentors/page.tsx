import { NotePencil, PushPin } from "@/utils/icons"
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import Link from "next/link";


export default function Page() {
    return (
        <div className="flex flex-col gap-4">

            {/* <Button _title="Editar" leftIcon={NotePencil} className="ml-auto mb-1" /> */}

            <div className="flex justify-end">
                <Link href="/instructions-mentors/edit" className="flex items-center gap-2 outline-none rounded-lg px-5 py-2 bg-midnight-blue-950">
                    <NotePencil size={20} weight="fill" color="white" />
                    <p className="font-bold text-white">Editar</p>
                </Link>
            </div>

            <Section className="px-5 py-4">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold">Lorem, ipsum.</h2>
                    <PushPin size={26} weight="fill" />
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mollis elit, id fringilla elit. Suspendisse nec elit eget neque eleifend posuere at nec ex. Maecenas lacinia, sapien quis consectetur egestas, nunc neque sodales mi, non posuere elit dui in libero. 
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mollis elit, id fringilla elit. Suspendisse nec elit eget neque eleifend posuere at nec ex. Maecenas lacinia, sapien quis consectetur egestas, nunc neque sodales mi, non posuere elit dui in libero. 
                </p>
            </Section>

            <Section className="px-5 py-4">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold">Lorem, ipsum.</h2>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mollis elit, id fringilla elit. Suspendisse nec elit eget neque eleifend posuere at nec ex. Maecenas lacinia, sapien quis consectetur egestas, nunc neque sodales mi, non posuere elit dui in libero. 
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mollis elit, id fringilla elit. Suspendisse nec elit eget neque eleifend posuere at nec ex. Maecenas lacinia, sapien quis consectetur egestas, nunc neque sodales mi, non posuere elit dui in libero. 
                </p>
            </Section>
        </div>
    )
}