import { Section } from "@/components/section";
import { Table } from "@/components/Table";
import { TableThead } from "@/components/Table/TableThead";
import Image from "next/image";
import { CaretRight, Envelope, LinkedinLogo, Phone } from "@/utils/icons"
import { Separator } from "@/components/Separator";
import Modal from "@/components/Modal";
import { useState } from "react";
import { BtnSeeMore } from "../_component/btnSeeMore";


export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Section>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl px-1 py-2">Turmas publicadas</h2>
          <span>000 turmas</span>
        </div>

        <Separator />

        <Table.Root className="border-separate border-spacing-y-1">
          <Table.Head>
            <Table.Row>
              <Table.Th>Nome</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Contato</Table.Th>
              <Table.Th></Table.Th>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row className="bg-white" >
              <Table.Td>Nome da trilha</Table.Td>
              <Table.Td>
                  <p className="bg-gray-400 rounded-lg w-fit text-white py-1 px-2">Status</p>
              </Table.Td>
              <Table.Td>
                <div className="flex items-center gap-1">
                  <Envelope size={22} />
                  <Phone size={22} />
                  <LinkedinLogo size={22} />
                </div>
              </Table.Td>
              <Table.Td>
                  <BtnSeeMore href="/" />
              </Table.Td>
            </Table.Row>
            <Table.Row className="bg-white" >
              <Table.Td>Nome da trilha</Table.Td>
              <Table.Td>
                  <p className="bg-gray-400 rounded-lg w-fit text-white py-1 px-2">Status</p>
              </Table.Td>
              <Table.Td>
                <div className="flex items-center gap-1">
                  <Envelope size={22} />
                  <Phone size={22} />
                  <LinkedinLogo size={22} />
                </div>
              </Table.Td>
              <Table.Td>
                  <div className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                      <p>Ver mais</p>
                      <CaretRight size={20} />
                  </div>
              </Table.Td>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Section>

      <Section>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl px-1 py-2">Alunos ativos</h2>
          <span>000 turmas</span>
        </div>

        <Separator />

        <Table.Root className="border-separate border-spacing-y-1">
          <Table.Head>
            <Table.Row>
              <Table.Th>Nome</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Contato</Table.Th>
              <Table.Th></Table.Th>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row className="bg-white" >
              <Table.Td>Nome da trilha</Table.Td>
              <Table.Td>
                  <p className="bg-gray-400 rounded-lg w-fit text-white py-1 px-2">Status</p>
              </Table.Td>
              <Table.Td>
                <div className="flex items-center gap-1">
                  <Envelope size={22} />
                  <Phone size={22} />
                  <LinkedinLogo size={22} />
                </div>
              </Table.Td>
              <Table.Td>
                  <div className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                      <p>Ver mais</p>
                      <CaretRight size={20} />
                  </div>
              </Table.Td>
            </Table.Row>
            <Table.Row className="bg-white" >
              <Table.Td>Nome da trilha</Table.Td>
              <Table.Td>
                  <p className="bg-gray-400 rounded-lg w-fit text-white py-1 px-2">Status</p>
              </Table.Td>
              <Table.Td>
                <div className="flex items-center gap-1">
                  <Envelope size={22} />
                  <Phone size={22} />
                  <LinkedinLogo size={22} />
                </div>
              </Table.Td>
              <Table.Td>
                  <div className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                      <p>Ver mais</p>
                      <CaretRight size={20} />
                  </div>
              </Table.Td>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Section>

      <Section>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl px-1 py-2">Mentores ativos</h2>
          <span>000 turmas</span>
        </div>

        <Separator />

        <Table.Root className="border-separate border-spacing-y-1">
          <Table.Head>
            <Table.Row>
              <Table.Th>Nome</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Contato</Table.Th>
              <Table.Th></Table.Th>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row className="bg-white" >
              <Table.Td>Nome da trilha</Table.Td>
              <Table.Td>
                  <p className="bg-gray-400 rounded-lg w-fit text-white py-1 px-2">Status</p>
              </Table.Td>
              <Table.Td>
                <div className="flex items-center gap-1">
                  <Envelope size={22} />
                  <Phone size={22} />
                  <LinkedinLogo size={22} />
                </div>
              </Table.Td>
              <Table.Td>
                  <div className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                      <p>Ver mais</p>
                      <CaretRight size={20} />
                  </div>
              </Table.Td>
            </Table.Row>
            <Table.Row className="bg-white" >
              <Table.Td>Nome da trilha</Table.Td>
              <Table.Td>
                  <p className="bg-gray-400 rounded-lg w-fit text-white py-1 px-2">Status</p>
              </Table.Td>
              <Table.Td>
                <div className="flex items-center gap-1">
                  <Envelope size={22} />
                  <Phone size={22} />
                  <LinkedinLogo size={22} />
                </div>
              </Table.Td>
              <Table.Td>
                  <div className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                      <p>Ver mais</p>
                      <CaretRight size={20} />
                  </div>
              </Table.Td>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Section>
    </div>
  );
}
