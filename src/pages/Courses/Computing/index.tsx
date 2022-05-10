import React from "react";
import { Accordion } from "react-bootstrap";
import Navigation from "../../../components/Navigation";
import "./styles.scss";

const ComputingCourse = () => {
  return (
    <div className="fullPage">
      <Navigation />
      <div className="p-3 page-container">
        <header className="d-flex fluid-container justify-content-between align-items-center mb-5">
          <h1>Aulas de Informática</h1>
          {/* <button className="btn btn-lg btn-primary">Novo Curso</button> */}
        </header>

        <div className="d-flex fluid-container align-content-center row gap-5 px-3">
          {/* <section id="windows">
            <h3 className="mb-3">Windows</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Aula #1 - Introdução/Formatação
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Aula #2 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Aula #3 - Adição/Subtração</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Aula #4 - Multiplicação/Divisão
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Aula #5 - Soma</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Aula #6 - Soma/Máximo/Mínimo
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Aula #7 - Soma/Máximo/Mínimo/Média
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Aula #8 - AutoSoma</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>Aula #9 - Gráficos</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>Aula #10 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>Aula #11 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>Aula #12 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>Aula #13 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>Aula #14 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header>Aula #15 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>Aula #16 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>Aula #17 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section> */}
          <section id="internet">
            <h3 className="mb-3">Internet</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Aula #1 - O que é internet e como entrar em sites
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Aula #2 - Google Pesquisas</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Aula #3 - Google: Pesquisa de Imagens</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Aula #4 - Google Maps/Street View
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Aula #5 - Criação e Envio de E-mail</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Aula #6 - Anexo pt. 1
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Aula #7 - Anexo pt. 2
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Aula #8 - Decolar.com</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>Aula #9 - Antivírus e Navegadores</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>Aula #10 - Baixar Música</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
          <section id="word">
            <h3 className="mb-3">Word</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Aula #1 - Digitação, Formatação, Erros no Texto
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Aula #2 - Formatação ABNT</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Aula #3 - Marcadores, Numeradores, Ordenação Alfabética</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Aula #4 - Localizar e Substituir
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Aula #5 - Currículo</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Aula #6 - WordArt
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Aula #7 - Tabela e Colar Imagens
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Aula #8 - Cabeçalho, Rodapé e Número de Página</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>Aula #9 - Recibo</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>Aula #10 - Orientação</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>Aula #11 - Bordas e Margens</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>Aula #12 - Etiquetas</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>Aula #13 - Sumário</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>Aula #14 - Currículo e Recibo</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header>Aula #15 - Revisão</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>Aula #16 - Revisão</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>Aula #17 - Prova</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
          <section id="excel">
            <h3 className="mb-3">Excel</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Aula #1 - Introdução/Formatação
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Aula #2 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Aula #3 - Adição/Subtração</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Aula #4 - Multiplicação/Divisão
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Aula #5 - Soma</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Aula #6 - Soma/Máximo/Mínimo
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Aula #7 - Soma/Máximo/Mínimo/Média
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Aula #8 - AutoSoma</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>Aula #9 - Gráficos</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>Aula #10 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>Aula #11 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>Aula #12 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>Aula #13 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>Aula #14 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header>Aula #15 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>Aula #16 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>Aula #17 - Adição</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
          <section id="powerpoint">
            <h3 className="mb-3">PowerPoint</h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Aula #1 - Introdução
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Aula #2 - Plano de Fundo</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Aula #3 - Plano de Fundo e Formas</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Aula #4 - Imagem
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Aula #5 - Imagem e Tabela</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  Aula #6 - Transição e Tempo
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Aula #7 - Animação Personalizada
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>Aula #8 - Hiperlink</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>Aula #9 - Hiperlink e Botões de Ação</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>Aula #10 - Som</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>Aula #11 - Salvar como JPEG e PDF</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>Aula #12 - Organograma</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>Aula #13 - Mapa Mental</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>Aula #14 - Criação de uma empresa</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header>Aula #15 - Empresa com Botões de Ação</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="16">
                <Accordion.Header>Aula #16 - Revisão</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="17">
                <Accordion.Header>Aula #17 - Prova</Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComputingCourse;
