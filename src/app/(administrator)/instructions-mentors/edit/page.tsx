import { PushPin } from "@/utils/icons";
import { Input } from "@/components/input";
import { Section } from "@/components/section";
import { TextArea } from "@/components/textarea";
import { Button } from "@/components/button";


export default function Page() {
    return (
        <div className="flex flex-col gap-4">
            <Section>
                <div className="flex items-center justify-between mb-2">
                    <Input placeholder="Sem título" className="bg-transparent border-0 w-full font-bold border-b-2 border-gray-300 rounded-none p-2 py-1" />
                    <PushPin size={26} weight="fill" className="ml-12" />
                </div>

                <TextArea register={null} name="description" placeholder="Descrição" className="max-w-full p-2 py-1" />
            </Section>

            <div className="flex justify-center gap-2 items-center">
                {/* <Button _title="Salvar e voltar depois" /> */}
                <Button _title="Liberar"/>
            </div>
        </div>
    )
}