import { Card, LineChart, Title } from "@tremor/react";

const chartdata = [
  {
    "response": 1121,
    "datetime": "August 9, 2023, 00:00"
  },
  {
    "response": 1015,
    "datetime": "August 9, 2023, 06:00"
  },
  {
    "response": 1033,
    "datetime": "August 9, 2023, 12:00"
  },
  {
    "response": 1047,
    "datetime": "August 9, 2023, 18:00"
  },
  {
    "response": 1050,
    "datetime": "August 10, 2023, 00:00"
  },
  {
    "response": 1012,
    "datetime": "August 10, 2023, 06:00"
  },
  {
    "response": 1067,
    "datetime": "August 10, 2023, 12:00"
  },
  {
    "response": 2671,
    "datetime": "August 10, 2023, 18:00"
  },
  {
    "response": 1465,
    "datetime": "August 11, 2023, 00:00"
  },
  {
    "response": 1394,
    "datetime": "August 11, 2023, 06:00"
  },
  {
    "response": 1157,
    "datetime": "August 11, 2023, 12:00"
  },
  {
    "response": 1151,
    "datetime": "August 11, 2023, 18:00"
  },
  {
    "response": 1123,
    "datetime": "August 12, 2023, 00:00"
  },
  {
    "response": 1078,
    "datetime": "August 12, 2023, 06:00"
  },
  {
    "response": 1067,
    "datetime": "August 12, 2023, 12:00"
  },
  {
    "response": 1085,
    "datetime": "August 12, 2023, 18:00"
  },
  {
    "response": 1097,
    "datetime": "August 13, 2023, 00:00"
  },
  {
    "response": 1072,
    "datetime": "August 13, 2023, 06:00"
  },
  {
    "response": 1088,
    "datetime": "August 13, 2023, 12:00"
  },
  {
    "response": 1112,
    "datetime": "August 13, 2023, 18:00"
  },
  {
    "response": 1102,
    "datetime": "August 14, 2023, 00:00"
  },
  {
    "response": 1080,
    "datetime": "August 14, 2023, 06:00"
  },
  {
    "response": 1090,
    "datetime": "August 14, 2023, 12:00"
  },
  {
    "response": 1082,
    "datetime": "August 14, 2023, 18:00"
  },
  {
    "response": 1102,
    "datetime": "August 15, 2023, 00:00"
  },
  {
    "response": 1073,
    "datetime": "August 15, 2023, 06:00"
  },
  {
    "response": 1076,
    "datetime": "August 15, 2023, 12:00"
  },
  {
    "response": 1080,
    "datetime": "August 15, 2023, 18:00"
  },
  {
    "response": 1079,
    "datetime": "August 16, 2023, 00:00"
  },
  {
    "response": 1062,
    "datetime": "August 16, 2023, 06:00"
  },
  {
    "response": 1087,
    "datetime": "August 16, 2023, 12:00"
  },
  {
    "response": 1045,
    "datetime": "August 16, 2023, 18:00"
  },
  {
    "response": 1081,
    "datetime": "August 17, 2023, 00:00"
  },
  {
    "response": 1055,
    "datetime": "August 17, 2023, 06:00"
  },
  {
    "response": 1040,
    "datetime": "August 17, 2023, 12:00"
  },
  {
    "response": 1067,
    "datetime": "August 17, 2023, 18:00"
  },
  {
    "response": 1075,
    "datetime": "August 18, 2023, 00:00"
  },
  {
    "response": 1056,
    "datetime": "August 18, 2023, 06:00"
  },
  {
    "response": 1053,
    "datetime": "August 18, 2023, 12:00"
  },
  {
    "response": 1093,
    "datetime": "August 18, 2023, 18:00"
  },
  {
    "response": 1063,
    "datetime": "August 19, 2023, 00:00"
  },
  {
    "response": 1088,
    "datetime": "August 19, 2023, 06:00"
  },
  {
    "response": 1062,
    "datetime": "August 19, 2023, 12:00"
  },
  {
    "response": 1052,
    "datetime": "August 19, 2023, 18:00"
  },
  {
    "response": 1062,
    "datetime": "August 20, 2023, 00:00"
  },
  {
    "response": 1079,
    "datetime": "August 20, 2023, 06:00"
  },
  {
    "response": 1065,
    "datetime": "August 20, 2023, 12:00"
  },
  {
    "response": 1073,
    "datetime": "August 20, 2023, 18:00"
  },
  {
    "response": 1064,
    "datetime": "August 21, 2023, 00:00"
  },
  {
    "response": 1037,
    "datetime": "August 21, 2023, 06:00"
  },
  {
    "response": 1060,
    "datetime": "August 21, 2023, 12:00"
  },
  {
    "response": 1049,
    "datetime": "August 21, 2023, 18:00"
  },
  {
    "response": 1199,
    "datetime": "August 22, 2023, 00:00"
  },
  {
    "response": 1185,
    "datetime": "August 22, 2023, 06:00"
  },
  {
    "response": 2260,
    "datetime": "August 22, 2023, 12:00"
  },
  {
    "response": 1707,
    "datetime": "August 22, 2023, 18:00"
  },
  {
    "response": 1449,
    "datetime": "August 23, 2023, 00:00"
  },
  {
    "response": 1097,
    "datetime": "August 23, 2023, 06:00"
  },
  {
    "response": 2181,
    "datetime": "August 23, 2023, 12:00"
  },
  {
    "response": 1889,
    "datetime": "August 23, 2023, 18:00"
  },
  {
    "response": 2379,
    "datetime": "August 24, 2023, 00:00"
  },
  {
    "response": 1748,
    "datetime": "August 24, 2023, 06:00"
  },
  {
    "response": 1945,
    "datetime": "August 24, 2023, 12:00"
  },
  {
    "response": 2191,
    "datetime": "August 24, 2023, 18:00"
  },
  {
    "response": 2263,
    "datetime": "August 25, 2023, 00:00"
  },
  {
    "response": 1554,
    "datetime": "August 25, 2023, 06:00"
  },
  {
    "response": 2632,
    "datetime": "August 25, 2023, 12:00"
  },
  {
    "response": 1959,
    "datetime": "August 25, 2023, 18:00"
  },
  {
    "response": 2884,
    "datetime": "August 26, 2023, 00:00"
  },
  {
    "response": 2851,
    "datetime": "August 26, 2023, 06:00"
  },
  {
    "response": 3310,
    "datetime": "August 26, 2023, 12:00"
  },
  {
    "response": 3002,
    "datetime": "August 26, 2023, 18:00"
  },
  {
    "response": 2904,
    "datetime": "August 27, 2023, 00:00"
  },
  {
    "response": 2937,
    "datetime": "August 27, 2023, 06:00"
  },
  {
    "response": 3227,
    "datetime": "August 27, 2023, 12:00"
  },
  {
    "response": 2799,
    "datetime": "August 27, 2023, 18:00"
  },
  {
    "response": 2779,
    "datetime": "August 28, 2023, 00:00"
  },
  {
    "response": 2689,
    "datetime": "August 28, 2023, 06:00"
  },
  {
    "response": 2995,
    "datetime": "August 28, 2023, 12:00"
  },
  {
    "response": 2583,
    "datetime": "August 28, 2023, 18:00"
  },
  {
    "response": 2395,
    "datetime": "August 29, 2023, 00:00"
  },
  {
    "response": 1788,
    "datetime": "August 29, 2023, 06:00"
  },
  {
    "response": 2268,
    "datetime": "August 29, 2023, 12:00"
  },
  {
    "response": 2283,
    "datetime": "August 29, 2023, 18:00"
  },
  {
    "response": 1476,
    "datetime": "August 30, 2023, 00:00"
  },
  {
    "response": 1340,
    "datetime": "August 30, 2023, 06:00"
  },
  {
    "response": 1486,
    "datetime": "August 30, 2023, 12:00"
  },
  {
    "response": 4220,
    "datetime": "August 30, 2023, 18:00"
  },
  {
    "response": 2090,
    "datetime": "August 31, 2023, 00:00"
  },
  {
    "response": 1564,
    "datetime": "August 31, 2023, 06:00"
  },
  {
    "response": 1148,
    "datetime": "August 31, 2023, 12:00"
  },
  {
    "response": 1054,
    "datetime": "August 31, 2023, 18:00"
  },
  {
    "response": 1087,
    "datetime": "September 1, 2023, 00:00"
  },
  {
    "response": 1110,
    "datetime": "September 1, 2023, 06:00"
  },
  {
    "response": 1074,
    "datetime": "September 1, 2023, 12:00"
  },
  {
    "response": 1062,
    "datetime": "September 1, 2023, 18:00"
  },
  {
    "response": 1148,
    "datetime": "September 2, 2023, 00:00"
  },
  {
    "response": 1110,
    "datetime": "September 2, 2023, 06:00"
  },
  {
    "response": 1108,
    "datetime": "September 2, 2023, 12:00"
  },
  {
    "response": 1131,
    "datetime": "September 2, 2023, 18:00"
  },
  {
    "response": 1121,
    "datetime": "September 3, 2023, 00:00"
  },
  {
    "response": 1088,
    "datetime": "September 3, 2023, 06:00"
  },
  {
    "response": 1096,
    "datetime": "September 3, 2023, 12:00"
  },
  {
    "response": 1114,
    "datetime": "September 3, 2023, 18:00"
  },
  {
    "response": 1141,
    "datetime": "September 4, 2023, 00:00"
  },
  {
    "response": 1112,
    "datetime": "September 4, 2023, 06:00"
  },
  {
    "response": 1149,
    "datetime": "September 4, 2023, 12:00"
  },
  {
    "response": 1157,
    "datetime": "September 4, 2023, 18:00"
  },
  {
    "response": 1162,
    "datetime": "September 5, 2023, 00:00"
  },
  {
    "response": 1077,
    "datetime": "September 5, 2023, 06:00"
  },
  {
    "response": 1135,
    "datetime": "September 5, 2023, 12:00"
  },
  {
    "response": 1129,
    "datetime": "September 5, 2023, 18:00"
  },
  {
    "response": 1094,
    "datetime": "September 6, 2023, 00:00"
  },
  {
    "response": 976,
    "datetime": "September 6, 2023, 06:00"
  },
  {
    "response": 1061,
    "datetime": "September 6, 2023, 12:00"
  },
  {
    "response": 1101,
    "datetime": "September 6, 2023, 18:00"
  },
  {
    "response": 1122,
    "datetime": "September 7, 2023, 00:00"
  },
  {
    "response": 1007,
    "datetime": "September 7, 2023, 06:00"
  },
  {
    "response": 1084,
    "datetime": "September 7, 2023, 12:00"
  },
  {
    "response": 1090,
    "datetime": "September 7, 2023, 18:00"
  },
  {
    "response": 1062,
    "datetime": "September 8, 2023, 00:00"
  },
  {
    "response": 1007,
    "datetime": "September 8, 2023, 06:00"
  },
  {
    "response": 1104,
    "datetime": "September 8, 2023, 12:00"
  },
  {
    "response": 1094,
    "datetime": "September 8, 2023, 18:00"
  },
  {
    "response": 1159,
    "datetime": "September 9, 2023, 00:00"
  },
  {
    "response": 1006,
    "datetime": "September 9, 2023, 06:00"
  },
  {
    "response": 1066,
    "datetime": "September 9, 2023, 12:00"
  },
  {
    "response": 1095,
    "datetime": "September 9, 2023, 18:00"
  },
  {
    "response": 1068,
    "datetime": "September 10, 2023, 00:00"
  },
  {
    "response": 1061,
    "datetime": "September 10, 2023, 06:00"
  },
  {
    "response": 1075,
    "datetime": "September 10, 2023, 12:00"
  },
  {
    "response": 1085,
    "datetime": "September 10, 2023, 18:00"
  },
  {
    "response": 1082,
    "datetime": "September 11, 2023, 00:00"
  },
  {
    "response": 1075,
    "datetime": "September 11, 2023, 06:00"
  },
  {
    "response": 1109,
    "datetime": "September 11, 2023, 12:00"
  },
  {
    "response": 1143,
    "datetime": "September 11, 2023, 18:00"
  },
  {
    "response": 1104,
    "datetime": "September 12, 2023, 00:00"
  },
  {
    "response": 1033,
    "datetime": "September 12, 2023, 06:00"
  },
  {
    "response": 1106,
    "datetime": "September 12, 2023, 12:00"
  },
  {
    "response": 1072,
    "datetime": "September 12, 2023, 18:00"
  },
  {
    "response": 1089,
    "datetime": "September 13, 2023, 00:00"
  },
  {
    "response": 1075,
    "datetime": "September 13, 2023, 06:00"
  },
  {
    "response": 1089,
    "datetime": "September 13, 2023, 12:00"
  },
  {
    "response": 1079,
    "datetime": "September 13, 2023, 18:00"
  },
  {
    "response": 1038,
    "datetime": "September 14, 2023, 06:00"
  },
  {
    "response": 1036,
    "datetime": "September 14, 2023, 12:00"
  },
  {
    "response": 1046,
    "datetime": "September 14, 2023, 18:00"
  },
  {
    "response": 1037,
    "datetime": "September 15, 2023, 00:00"
  },
  {
    "response": 1030,
    "datetime": "September 15, 2023, 06:00"
  },
  {
    "response": 1044,
    "datetime": "September 15, 2023, 12:00"
  },
];


const ResponseChart = () => (
  <div className="container mx-auto mt-7">
    <h2 className="text-3xl font-bold mb-6">Overall Response time</h2>
    <Card>
      <Title>Avarage response time in miliseconds</Title>
      <LineChart
        className="mt-6"
        data={chartdata}
        index="datetime"
        categories={["response", "datetime"]}
        colors={["emerald"]}
        // responseFormatter={responseFormatter}
        yAxisWidth={40}
      />
    </Card>
  </div>
);

export default ResponseChart;