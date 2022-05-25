import React, { Fragment } from "react";
import SVGRegion from "./SVGRegion";
import TerrainType from "./TerrainType";
import hero from "../Images/hero.svg";

export default function Content() {
  return (
    <Fragment>
      <div class="flex flex-col bg-brand max-w-8xl">
        <div class="h-4 md:h-10"></div>
        <div className=" px-10 space-y-10">
          {/* DESCRIPCION USO DE SUELo */}
          <div className="grid grid-cols-3 max-w-7xl mx-auto">
            <div className="col-span-2">
              <div className="flex flex-col space-y-4">
                <span className="text-white text-6xl font-extrabold font-rale">
                  Vocaciones Productivas
                </span>
                <span className="font-rale text-lg text-white">
                La propuesta de Vocaciones Productivas es de carácter orientativo y se elaboró en base a la
recopilación y análisis de información cuantitativa y cualitativa, tanto primaria como secundaria.
Se consideraron datos del SII relativos a empleo formal, los resultados de la MIP de la Región de
Los Ríos, y cruces de información que permiten visualizar complejidades del entramado productivo
regional y comunal tales como los Pladecos, que explicitan cada cierto período de tiempo la
estructura y dinámica en la cual se desarrollarán los territorios que componen la Región de Los
Ríos, los usos preferentes de suelo a nivel de comunas e información primaria obtenida en el
proceso de formulación de escala comunal y opinión experta.
                </span>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
          <div className="flex-grow text-center grid grid-cols-1 lg:grid-cols-4 items-center">
            {/* SVG Container */}
            <div className="col-span-4 xl:col-span-2 ">
              <SVGRegion />
            </div>
            {/* GRAFICO */}
            <div className="col-span-4 xl:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-3 rounded-xl col-span-1 lg:gap-2 space-y-1 lg:space-y-0 ">
                <div className="col-span-3 lg:col-span-1 space-y-1">
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                </div>
                <div className="col-span-3 lg:col-span-1 space-y-1">
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                </div>
                <div className="col-span-3 lg:col-span-1 space-y-1">
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                  <TerrainType type="Hola" />
                </div>
              </div>
            </div>
          </div>
          {/* 
            GRAFO ?
          */}
        </div>
      </div>
    </Fragment>
  );
}
