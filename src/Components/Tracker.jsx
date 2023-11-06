import { Card, Title, Tracker, Flex, Text } from "@tremor/react";


const data = [
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "gray", tooltip: "Maintenance" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "yellow", tooltip: "Degraded" },
  { color: "emerald", tooltip: "Operational" },
];

export const TrackerExample = ({ service }) => {
  let uptime;
  switch (service) {
    case "API":
      data[14].color = "yellow";
      data[14].tooltip = "Degraded";
      uptime = "99%";
      break;
    case "Blog":
      data[12].color = "gray";
      data[12].tooltip = "Maintenance";
      uptime = "90%";
      break;
    case "SSL":
      data[21].color = "yellow";
      data[21].tooltip = "Degraded";
      uptime = "88%";
      break;
    case "NginX":
      data[15].color = "rose";
      data[15].tooltip = "Downtime";
      uptime = "75%";
      break;
    default:
      break;
  }
  return (
    <>
      <Flex justifyContent="end" className="mt-4">
        <Text>Uptime {uptime}</Text>
      </Flex>
      <Tracker data={data} className="mt-2" />
    </>
  );
}

