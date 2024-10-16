"use client";
import { BookmarkSimple, BookOpenText, CalendarBlank, CaretRight, Clock, FloppyDiskBack, MagnifyingGlass, Notepad, NotePencil, PencilRuler, Trash, Users } from "@/utils/icons"
import { Accordion } from "@/components/Accordion";
import { Table } from "@/components/Table";
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { useEffect, useState } from "react";
import { InformationList } from "@/components/InformationList";
import { Separator } from "@/components/Separator";
import { BtnSeeMore } from "@/app/(administrator)/_component/btnSeeMore";
import PageTrail from "../../../../../educational-content/[trail]/page";
import Modal from "@/components/Modal";
import { Input } from "@/components/input";
import Link from "next/link";
import { Checkbox } from "@/components/Checkbox";
import { toast } from "react-toastify";

export default function Page({ params }: { params: { classId: string, moduleId: string, week: string } }) {
//   const { classId, moduleId, week } = useParams();
//   const { data, error } = useSWR(`/api/weeks/${week}`, fetcher);

//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading...</div>;
  const [page, setPage] = useState<"listTrails" | "trail">('listTrails');
  const [trailsSelected, setTrailsSelected] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewTrails = () => {
    try {
      throw Error('Error');
      setIsModalOpen(false);
    } catch(err) {
      console.log(err);
      toast.error('Ops! Ocorreu um erro ao tenta adicionar a(s) trilha(s).');
    } finally {}
  }

  const closeModal = () => {
    if(!trailsSelected) {
      toast.error('Ops! Selecione ao menos uma trilha para adicionar.');
    }
  }

  const onConcludeWeek = () => {}

  function ListTrails() {
    return (
      <>
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
                    <BtnSeeMore href="/educational-content/nome-da-trilha" />
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
              <Button 
                leftIcon={NotePencil} 
                _title="Adicionar ou remover trilhas" 
                className="justify-center w-full my-2" 
                onClick={() => setIsModalOpen(true)}
              />
              <Button 
                leftIcon={FloppyDiskBack} 
                _title="Concluir semana" 
                className="bg-green-500 justify-center w-full" 
                iconStyle={{ weight: "fill" }} 
                onClick={onConcludeWeek}
              />
            </div>
          </div>
        </div> 

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h1 className="text-2xl font-bold">Adicionar ou remover trilhas</h1>
          <p>Marque as trilhas para adicioná-las  à semana e desmarque para retira-las.</p>

          <Section className="relative">
              <Input placeholder="Buscar pelo nome" className="w-full  placeholder:!text-gray-400 pr-9" />
              <button className="absolute right-6 top-0 bottom-0">
                  <MagnifyingGlass className="bg-white"/>
              </button>
          </Section>

          <Accordion className="p-2 mt-5" label="Trilhas selecionadas">
            <p className="text-center py-7 text-gray-600">Ainda não há trilhas selecionadas</p>
          </Accordion>
          
          <Accordion className="p-2 mt-5" label="Trilhas publicadas">
              <Table.Root>
                  <Table.Head>
                      <Table.Row>
                          <Table.Th className="pl-2">
                            <Checkbox id="all-public" />
                          </Table.Th>
                          <Table.Th isOrdered={true} onClick={() => 1}>Nome</Table.Th>
                          <Table.Th></Table.Th>
                      </Table.Row>
                  </Table.Head>
                  <Table.Body>
                      <Table.Row className="bg-white">
                        <Table.Td className="pl-2">
                            <Checkbox id="one-publish" />
                          </Table.Td>
                          <Table.Td>Nome da trilha</Table.Td>
                          <Table.Td>
                              <Link href="/educational-content/nome-da-trilha" className="flex items-center ml-auto w-fit bg-midnight-blue-950 py-1 px-2 rounded-lg text-white">
                                  <p>Ver mais</p>
                                  <CaretRight size={20} />
                              </Link>
                          </Table.Td>
                      </Table.Row>
                  </Table.Body>
              </Table.Root>
          </Accordion>

          <Button _title="Concluir" className="bg-green-500 mx-auto mt-5" onClick={handleNewTrails}/>
        </Modal>
      </>
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