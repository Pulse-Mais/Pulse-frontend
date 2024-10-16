"use client";
import { BookBookmark, BookOpenText, Chalkboard, House, Nut, Student, UsersThree } from "@/utils/icons";
import axios from "axios";

const links = [
    { name: 'Menu', href: '/', icon: House },
    { name: 'Turmas', href: '/class', icon: UsersThree },
    { name: 'Alunos', href: '/students', icon: Student },
    { name: 'Mentores', href: '/mentors', icon: Chalkboard },
    { name: 'Conteúdo Educacional', href: '/educational-content', icon: BookBookmark },
    { name: 'Instruções dos Mentores', href: '/instructions-mentors', icon: BookOpenText },
    { name: 'Configurações', href: '/settings', icon: Nut },
];


function linkRouter() {
    console.log(window.location.pathname)
}


async function getStatesBrazil(): Promise<EstadosProps[]> {
    try {
        const res = await axios.get<EstadosProps[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');
        // if(res.status !== 200 || res.data.length <= 0) {
        //     return [{ message: "Erro ao buscar estados" }];
        // }
        return res.data;
    } catch(err: any) {
        console.log("[ERROR | getEstadosBrasil]: ", err);
        return err;
    } 
}

async function getMunicipalityBrazil(id: number): Promise<MunicipiosProps[]> {
    try {
        const res = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`);
        // if(res.status !== 200 || res.data.length <= 0) {
        //     return [{ message: "Erro ao buscar estados" }];
        // }
        return res.data;
    } catch(err: any) {
        console.log("[ERROR | getCidadesBrasil]: ", err);
        return err;
    }
}

export {
    links,
    linkRouter,
    getStatesBrazil,
    getMunicipalityBrazil
}