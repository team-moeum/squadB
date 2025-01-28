import React from "react";
import { Box } from "@moeum/common/components/ui/box";
import { Text } from "@moeum/common/components/ui/text";

export const RenderItem = ({ item }: { item: any }) => {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const timeOptions = { hour: "numeric", minute: "numeric" };

  if (!item) {
    console.warn("item이 null이거나 undefined입니다.");
    return null;
  }

  const name = item.name || "이벤트";
  // const impact = item.impact || "중요도 없음";
  const estimate = item.estimate || "예측치 없음";
  const previous = item.previous || "이전 값 없음";

  const time = item.time
    ? `${new Date(item.time).toLocaleString("ko-KR", dateOptions)} ${new Date(item.time).toLocaleTimeString("ko-KR", timeOptions)}`
    : "시간 정보 없음";
  const actual = item.actual || "실제 값 없음";
  const country = item.country || "국가 정보 없음";
  // const unit = item.unit || "단위 없음";

  return (
    <Box className="p-4 bg-white rounded-lg mt-4 mb-4 mx-4 flex flex-col justify-center">
      <Text className="font-semibold text-slate-800 mb-2">{name}</Text>
      <Text className="text-slate-700">국가: {country}</Text>
      <Text className="text-slate-700">예측치: {estimate}</Text>
      <Text className="text-slate-700">이전 값: {previous}</Text>
      <Text className="text-slate-700">실제 값: {actual}</Text>
      <Text className="text-slate-700">시간: {time}</Text>
    </Box>
  );
};
