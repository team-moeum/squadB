import React from "react";
import { Box } from "@moeum/common/components/ui/box";
import { Text } from "@moeum/common/components/ui/text";

export const RenderItem = ({ item }: { item: any }) => {
  if (!item) {
    console.warn("item이 null이거나 undefined입니다.");
    return null;
  }

  const category = item.category || "카테고리 ";
  const content = item.content || "내용";

  return (
    <Box className="p-4 bg-white rounded-lg mt-4 mb-4 mx-4 flex justify-center h-20">
      <Text className="font-semibold text-slate-800 mb-2">
        {category === "경제지표" ? "📊 " : category === "휴장" ? "🏖 " : "📅 "}
        {category}
      </Text>
      <Text className="text-slate-700">{content}</Text>
    </Box>
  );
};
