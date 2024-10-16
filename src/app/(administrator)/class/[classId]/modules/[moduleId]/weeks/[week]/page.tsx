"use client";
import { BookmarkSimple, BookOpenText, CalendarBlank, CaretRight, Clock, Notepad, NotePencil, PencilRuler, Trash, Users } from "@/utils/icons"
import { Accordion } from "@/components/Accordion";
import { Table } from "@/components/Table";
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { useEffect, useState } from "react";
import { InformationList } from "@/components/InformationList";
import { Separator } from "@/components/Separator";


export default function Page() {
//   const { classId, moduleId, week } = useParams();
//   const { data, error } = useSWR(`/api/weeks/${week}`, fetcher);

//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading...</div>;
  const [page, setPage] = useState<"listTrails" | "trail">('listTrails');

  function ListTrails() {
    return (
      <div className="flex w-full gap-5">
        <Accordion label="Trilhas" className="p-2 w-full h-fit">
          <Table.Root>
            <Table.Head>
              <Table.Row>
                <Table.Th>Nome</Table.Th>
                <Table.Th></Table.Th>
              </Table.Row>
            </Table.Head>
            <Table.Body className="bg-white">
              <Table.Row>
                <Table.Td>Nome da trilha</Table.Td>
                <Table.Td>
                  <div className="flex items-center ml-auto w-fit bg-gray-400 py-1 px-2 rounded-lg text-white">
                      <p>Ver mais</p>
                      <CaretRight size={20} />
                  </div>
                </Table.Td>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Accordion>

        <div className="max-w-80 w-full">
          <Section className="p-0">
            <div className="w-full h-40 bg-black rounded-t-lg" />


            <InformationList 
              _title="Informações"
              listInfo={[
                {
                  leftIcon: NotePencil,
                  title: "Descrição",
                  value: "Lorem Ipsum"
                },
                {
                  leftIcon: CalendarBlank,
                  title: "Data de publicação",
                  value: "00/00/0000"
                },
                {
                  leftIcon: Clock,
                  title: "Tempo total",
                  value: "0"
                },
                {
                  leftIcon: BookOpenText,
                  title: "Quantidade de aulas",
                  value: "0"
                },
                {
                  leftIcon: PencilRuler,
                  title: "Quantidade de atividades",
                  value: "0"
                },
                {
                  leftIcon: CalendarBlank,
                  title: "Data de criação",
                  value: "00/00/0000"
                },
                {
                  leftIcon: NotePencil,
                  title: "Ultima edição",
                  value: "00/00/0000"
                },
                {
                  leftIcon: Users,
                  title: "Criadores",
                  value: "Lorem Ipsum"
                }
              ]}
            />
            
          </Section>

          <button className="flex items-center mx-auto gap-1 mt-2">
              <NotePencil size={22} />
              <p>Editar Informações</p>
          </button>

          <Separator className="mt-2" />

          <div>
            <Button leftIcon={NotePencil} _title="Adicionar ou remover trilhas" className="justify-center w-full my-2" />
            <Button leftIcon={Trash} _title="Excluir semana" className="bg-gray-300 text-black justify-center w-full" />
          </div>
        </div>
      </div>
    )
  }

  function Trail() {
    return (
      <div className="flex w-full gap-5">
        <Accordion label="Atividades e trilha liberadas" className="p-2 w-full h-fit">
          <Table.Root>
            <Table.Head>
              <Table.Row>
                <Table.Th>N°</Table.Th>
                <Table.Th>Nome</Table.Th>
                <Table.Th>Tipo</Table.Th>
                <Table.Th></Table.Th>
              </Table.Row>
            </Table.Head>
            <Table.Body className="bg-white">
              <Table.Row>
                <Table.Td>1</Table.Td>
                <Table.Td className="flex items-center gap-2">
                  <BookOpenText size={26} />
                  <p>Nome</p>
                </Table.Td>
                <Table.Td>
                  <p className="bg-gray-300 rounded-lg w-fit text-white py-1 px-2">Aula</p>
                </Table.Td>
                <Table.Td>
                  <div className="flex items-center ml-auto bg-gray-400 py-1 px-2 rounded-lg text-white w-fit">
                      <p>Ver mais</p>
                      <CaretRight />
                  </div>
                </Table.Td>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Accordion>
        <div className="max-w-80 w-full">

          <InformationList 
            _title="Informações"
            listInfo={[
              {
                leftIcon: NotePencil,
                title: "Descrição",
                value: "Lorem Ipsum"
              },
              {
                leftIcon: Clock,
                title: "Tempo total",
                value: "0"
              },
              {
                leftIcon: BookOpenText,
                title: "Quantidade de aulas",
                value: "0"
              },
              {
                leftIcon: PencilRuler,
                title: "Quantidade de atividades",
                value: "0"
              },
              {
                leftIcon: CalendarBlank,
                title: "Data de criação",
                value: "00/00/0000"
              },
              {
                leftIcon: NotePencil,
                title: "Ultima edição",
                value: "00/00/0000"
              },
              {
                leftIcon: Users,
                title: "Criadores",
                value: "Lorem Ipsum"
              }
            ]}
          />

          <Button _title="Editar trilha" leftIcon={NotePencil} className="w-full justify-center mt-2" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl">
        {page === 'listTrails' ? 'Semana X' : 'Trilha'}
      </h1>

      <div className="flex w-full gap-5">
        {(() => {
          switch (page) {
            case 'listTrails':
              return <ListTrails />;
            case 'trail':
              return <Trail />;
            default:
              return <div>Loading...</div>;
          }
        })()}
      </div>
    </div>
  );
}