// React
import React from "react";

// Component
import Header from "@component_rooms/header/ui_header";
import Top from "@component_rooms/top/ui_top";
import PreViewPhoto from "@component_rooms/photo/ui_previewPhoto";
import TravelInfo from "@component_rooms/info/ui_travelInfo";
import Reservation from "@component_rooms/reservation/ui_reservation";

export default async function Page({ id=2 }) {
  /*
   * DataFetch
   * > 세부 데이터는 roomsData.json 파일로 처리
   *                └> http://localhost:3000/api/rooms/${id}
   *
   * --------------------------------------------------------
   * Next.js에서는 API 루트 디렉토리에서 반환되는 JSON 데이터를
   * { "data": ... }와 같은 형태로 감싸는 것이 기본 동작이다.
   * --------------------------------------------------------
   */
  const info = await fetch(`http://localhost:3000/api/rooms/${id}`, {
    cache: "no-cache",
  });
  const parsedJson = await info.json();
  const parsedData = parsedJson.data;

  return (
    <React.Fragment>
      <Header />
      <Top title={parsedData.title} />
      <PreViewPhoto arrImage={parsedData.images} />

      <div className="w-full max-w-7xl h-auto px-20 m-auto">
        <div className="flex flex-wrap justify-start">
          <div className="w-3/5 h-auto">
            <TravelInfo lodgingInfo={parsedData.lodgingInfo} />
          </div>
          <div className="w-2/5 h-auto">
            <Reservation />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
