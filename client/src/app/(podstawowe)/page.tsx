export default function Home() {
  // const [message, setMessage] = useState('Loading...');

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8080/api/home')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMessage(data.message);
  //     });
  // });
  return(
    <div className="relative bg-extended-gray-900 w-full h-[1828px] overflow-hidden text-left text-base text-default-white font-roboto">
      <b className="absolute top-[640px] left-[200px] text-17xl text-extended-orange-500">
        Repertuar
      </b>
      <b className="absolute top-[1207px] left-[202px] text-17xl text-extended-orange-500">
        Zapowiedzi
      </b>
      <div className="absolute top-[700px] left-[230px] font-medium whitespace-pre-wrap">{`Dziś - Niedziela, 29 października  `}</div>
      <img
        className="absolute top-[1568px] left-[200px] w-9 h-9 overflow-hidden"
        alt=""
        src="/movie.svg"
      />
      <img
        className="absolute top-[80px] left-[0] w-full h-[512px] object-cover"
        alt=""
        src="/carousel-image@2x.png"
      />
      <img
        className="absolute top-[323px] left-[1356px] w-[19.97px] h-[25.97px] opacity-[0.5]"
        alt=""
        src="/group-1.svg"
      />
      <img
        className="absolute top-[319px] left-[64px] w-[19.97px] h-[25.97px] object-contain opacity-[0.3]"
        alt=""
        src="/group-2@2x.png"
      />
      <div className="absolute top-[572px] left-[640px] w-40 h-1">
        <div className="absolute top-[0px] left-[0px] bg-default-white w-12 h-1" />
        <div className="absolute top-[0px] left-[56px] bg-extended-gray-300 w-12 h-1 opacity-[0.5]" />
        <div className="absolute top-[0px] left-[112px] bg-extended-gray-300 w-12 h-1 opacity-[0.5]" />
      </div>
      <div className="absolute top-[648px] left-[1082px] rounded-md bg-extended-gray-800 overflow-hidden flex flex-row items-center justify-center py-3 px-4 border-[1px] border-solid border-extended-orange-500">
        <div className="relative font-medium">{`Wyświetl więcej >`}</div>
      </div>
      <img
        className="absolute top-[696px] left-[200px] w-6 h-6 overflow-hidden"
        alt=""
        src="/calendar-today.svg"
      />
      <div className="absolute top-[781.5px] left-[198.5px] box-border w-[1043px] h-[3px] border-t-[3px] border-solid border-extended-gray-500" />
      <div className="absolute top-[752px] left-[216px] font-medium">Filmy</div>
      <div className="absolute top-[752px] left-[736px] font-medium">
        do południa
      </div>
      <div className="absolute top-[752px] left-[909px] font-medium">
        przed południem
      </div>
      <div className="absolute top-[752px] left-[1083px] font-medium">
        wieczorem
      </div>
      <div className="absolute top-[783px] left-[200px] w-[1040.33px] h-[51px]">
        <div className="absolute h-[1.96%] w-[100.06%] top-[99.02%] right-[-0.02%] bottom-[-0.98%] left-[-0.05%] box-border border-t-[1px] border-solid border-extended-gray-500" />
        <div className="absolute h-[94.12%] w-[49.98%] top-[0%] right-[50.02%] bottom-[5.88%] left-[0%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[33.35%] bottom-[5.88%] left-[49.98%] bg-extended-gray-800" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[16.73%] bottom-[5.88%] left-[66.61%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[0%] bottom-[5.88%] left-[83.34%] bg-extended-gray-800" />
        <b className="absolute top-[27.45%] left-[1.54%]">CHłOPI</b>
        <b className="absolute top-[27.45%] left-[51.52%] text-extended-gray-400">
          10:00
        </b>
        <b className="absolute top-[27.45%] left-[56.52%] text-extended-gray-400">
          12:15
        </b>
        <b className="absolute top-[27.45%] left-[68.15%]">15:00</b>
        <b className="absolute top-[27.45%] left-[73.15%]">17:00</b>
        <b className="absolute top-[27.45%] left-[84.78%]">18:45</b>
        <b className="absolute top-[27.45%] left-[89.78%]">21:15</b>
      </div>
      <div className="absolute top-[835px] left-[200px] w-[1040.33px] h-[51px]">
        <div className="absolute h-[1.96%] w-[100.06%] top-[99.02%] right-[-0.02%] bottom-[-0.98%] left-[-0.05%] box-border border-t-[1px] border-solid border-extended-gray-500" />
        <div className="absolute h-[94.12%] w-[49.98%] top-[0%] right-[50.02%] bottom-[5.88%] left-[0%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[33.35%] bottom-[5.88%] left-[49.98%] bg-extended-gray-800" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[16.73%] bottom-[5.88%] left-[66.61%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[0%] bottom-[5.88%] left-[83.34%] bg-extended-gray-800" />
        <b className="absolute top-[27.45%] left-[1.54%]">TEŚCIOWIE 2</b>
        <b className="absolute top-[27.45%] left-[68.15%] text-extended-gray-400">
          13:15
        </b>
        <b className="absolute top-[27.45%] left-[73.15%]">17:00</b>
        <b className="absolute top-[27.45%] left-[68.15%] hidden">20:00</b>
        <b className="absolute top-[27.45%] left-[84.78%]">20:45</b>
      </div>
      <div className="absolute top-[887px] left-[200px] w-[1040.33px] h-[51px]">
        <div className="absolute h-[1.96%] w-[100.06%] top-[99.02%] right-[-0.02%] bottom-[-0.98%] left-[-0.05%] box-border border-t-[1px] border-solid border-extended-gray-500" />
        <div className="absolute h-[94.12%] w-[49.98%] top-[0%] right-[50.02%] bottom-[5.88%] left-[0%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[33.35%] bottom-[5.88%] left-[49.98%] bg-extended-gray-800" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[16.73%] bottom-[5.88%] left-[66.61%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[0%] bottom-[5.88%] left-[83.34%] bg-extended-gray-800" />
        <b className="absolute top-[27.45%] left-[1.54%]">RÓŻYCZKA 2</b>
        <b className="absolute top-[27.45%] left-[51.52%] text-extended-gray-400">
          11:15
        </b>
        <b className="absolute top-[27.45%] left-[56.52%] hidden text-extended-gray-400">
          12:15
        </b>
        <b className="absolute top-[27.45%] left-[68.15%]">17:00</b>
        <b className="absolute top-[27.45%] left-[73.15%]">17:00</b>
        <b className="absolute top-[27.45%] left-[84.78%]" />
        <b className="absolute top-[27.45%] left-[89.78%] hidden">21:15</b>
      </div>
      <div className="absolute top-[938px] left-[200px] w-[1040.33px] h-[51px]">
        <div className="absolute h-[1.96%] w-[100.06%] top-[99.02%] right-[-0.02%] bottom-[-0.98%] left-[-0.05%] box-border border-t-[1px] border-solid border-extended-gray-500" />
        <div className="absolute h-[94.12%] w-[49.98%] top-[0%] right-[50.02%] bottom-[5.88%] left-[0%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[33.35%] bottom-[5.88%] left-[49.98%] bg-extended-gray-800" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[16.73%] bottom-[5.88%] left-[66.61%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[0%] bottom-[5.88%] left-[83.34%] bg-extended-gray-800" />
        <b className="absolute top-[27.45%] left-[1.54%]">
          PSI PATROL: Wielki film / dubbing
        </b>
        <b className="absolute top-[27.45%] left-[51.52%] text-extended-gray-400">
          10:00
        </b>
        <b className="absolute top-[27.45%] left-[56.52%] text-extended-gray-400">
          12:15
        </b>
        <b className="absolute top-[27.45%] left-[68.15%]">15:00</b>
        <b className="absolute top-[27.45%] left-[73.15%] hidden">17:00</b>
        <b className="absolute top-[27.45%] left-[84.78%]">18:45</b>
        <b className="absolute top-[27.45%] left-[89.78%] hidden">21:15</b>
      </div>
      <div className="absolute top-[989px] left-[200px] w-[1040.33px] h-[51px]">
        <div className="absolute h-[1.96%] w-[100.06%] top-[99.02%] right-[-0.02%] bottom-[-0.98%] left-[-0.05%] box-border border-t-[1px] border-solid border-extended-gray-500" />
        <div className="absolute h-[94.12%] w-[49.98%] top-[0%] right-[50.02%] bottom-[5.88%] left-[0%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[33.35%] bottom-[5.88%] left-[49.98%] bg-extended-gray-800" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[16.73%] bottom-[5.88%] left-[66.61%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[0%] bottom-[5.88%] left-[83.34%] bg-extended-gray-800" />
        <b className="absolute top-[27.45%] left-[1.54%]">
          DISNEY100: Kraina lodu / dubbing
        </b>
        <b className="absolute top-[27.45%] left-[51.52%] text-extended-gray-400">
          10:00
        </b>
        <b className="absolute top-[27.45%] left-[56.52%] text-extended-gray-400">
          12:15
        </b>
        <b className="absolute top-[27.45%] left-[68.15%] hidden">15:00</b>
        <b className="absolute top-[27.45%] left-[73.15%] hidden">17:00</b>
        <b className="absolute top-[27.45%] left-[84.78%] hidden">18:45</b>
        <b className="absolute top-[27.45%] left-[89.78%] hidden">21:15</b>
      </div>
      <div className="absolute top-[1040px] left-[200px] w-[1040.33px] h-[51px]">
        <div className="absolute h-[1.96%] w-[100.06%] top-[99.02%] right-[-0.02%] bottom-[-0.98%] left-[-0.05%] box-border border-t-[1px] border-solid border-extended-gray-500" />
        <div className="absolute h-[94.12%] w-[49.98%] top-[0%] right-[50.02%] bottom-[5.88%] left-[0%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[33.35%] bottom-[5.88%] left-[49.98%] bg-extended-gray-800" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[16.73%] bottom-[5.88%] left-[66.61%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[0%] bottom-[5.88%] left-[83.34%] bg-extended-gray-800" />
        <b className="absolute top-[27.45%] left-[1.54%]">
          PIĘĆ KOSZMARNYCH NOCY / napisy
        </b>
        <b className="absolute top-[27.45%] left-[51.52%] hidden text-extended-gray-400">
          10:00
        </b>
        <b className="absolute top-[27.45%] left-[56.52%] hidden text-extended-gray-400">
          12:15
        </b>
        <b className="absolute top-[27.45%] left-[68.15%]">17:00</b>
        <b className="absolute top-[27.45%] left-[73.15%] hidden">17:00</b>
        <b className="absolute top-[27.45%] left-[84.78%]">18:45</b>
        <b className="absolute top-[27.45%] left-[89.78%]">21:15</b>
      </div>
      <div className="absolute top-[1092px] left-[200px] w-[1040.33px] h-[51px]">
        <div className="absolute h-[1.96%] w-[100.06%] top-[99.02%] right-[-0.02%] bottom-[-0.98%] left-[-0.05%] box-border border-t-[1px] border-solid border-extended-gray-500" />
        <div className="absolute h-[94.12%] w-[49.98%] top-[0%] right-[50.02%] bottom-[5.88%] left-[0%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[33.35%] bottom-[5.88%] left-[49.98%] bg-extended-gray-800" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[16.73%] bottom-[5.88%] left-[66.61%] bg-extended-gray-900" />
        <div className="absolute h-[94.12%] w-[16.66%] top-[0%] right-[0%] bottom-[5.88%] left-[83.34%] bg-extended-gray-800" />
        <b className="absolute top-[27.45%] left-[1.54%]">FIGURANT</b>
        <b className="absolute top-[27.45%] left-[51.52%] text-extended-gray-400">
          10:45
        </b>
        <b className="absolute top-[27.45%] left-[56.52%] hidden text-extended-gray-400">
          12:15
        </b>
        <b className="absolute top-[27.45%] left-[68.15%] hidden">15:00</b>
        <b className="absolute top-[27.45%] left-[73.15%] hidden">17:00</b>
        <b className="absolute top-[27.45%] left-[84.78%] hidden">18:45</b>
        <b className="absolute top-[27.45%] left-[89.78%] hidden">21:15</b>
      </div>
      <div className="absolute top-[1205px] left-[1063px] rounded-md bg-extended-gray-800 overflow-hidden flex flex-row items-center justify-center py-3 px-4 border-[1px] border-solid border-extended-orange-500">
        <div className="relative font-medium">{`Więcej zapowiedzi >`}</div>
      </div>
      <div className="absolute top-[1262px] left-[200px] w-[1042px] h-[131.38px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-md w-[244px] h-[131.38px] object-cover"
          alt=""
          src="/nowa-notatka-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[266px] rounded-md w-[244px] h-[131.38px] object-cover"
          alt=""
          src="/nowa-notatka-2@2x.png"
        />
        <img
          className="absolute top-[0px] left-[532px] rounded-md w-[244px] h-[131.38px] object-cover"
          alt=""
          src="/nowa-notatka-3@2x.png"
        />
        <img
          className="absolute top-[0px] left-[798px] rounded-md w-[244px] h-[131.38px] object-cover"
          alt=""
          src="/nowa-notatka-4@2x.png"
        />
      </div>
      <img
        className="absolute top-[1304px] left-[295px] w-12 h-12 overflow-hidden opacity-[0.75]"
        alt=""
        src="/play-circle.svg"
      />
      <img
        className="absolute top-[1304px] left-[564px] w-12 h-12 overflow-hidden opacity-[0.75]"
        alt=""
        src="/play-circle.svg"
      />
      <img
        className="absolute top-[1304px] left-[833px] w-12 h-12 overflow-hidden opacity-[0.75]"
        alt=""
        src="/play-circle.svg"
      />
      <img
        className="absolute top-[1304px] left-[1096px] w-12 h-12 overflow-hidden opacity-[0.75]"
        alt=""
        src="/play-circle.svg"
      />
      <b className="absolute top-[1401px] left-[202px]">
        PATI i klątwa Posejdona
      </b>
      <div className="absolute top-[1424px] left-[202px] text-sm text-default-gray-400">
        3 Listopada 2023
      </div>
      <b className="absolute top-[1401px] left-[466px]">KAJTEK CZARODZIEJ</b>
      <div className="absolute top-[1424px] left-[466px] text-sm text-default-gray-400">
        3 Listopada 2023
      </div>
      <b className="absolute top-[1401px] left-[732px]">MARVELS</b>
      <div className="absolute top-[1424px] left-[732px] text-sm text-default-gray-400">
        10 Listopada 2023
      </div>
      <b className="absolute top-[1400px] left-[1001px]">UWIERZ W MIKOŁAJA</b>
      <div className="absolute top-[1423px] left-[1001px] text-sm text-default-gray-400">
        10 Listopada 2023
      </div>
    </div>
  );;
}
