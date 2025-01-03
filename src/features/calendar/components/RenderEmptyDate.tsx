import React from "react";
import { Box } from "@moeum/common/components/ui/box";
import { Text } from "@moeum/common/components/ui/text";

export const RenderEmptyDate = () => (
  <Box className="p-4 bg-slate-50 rounded-lg mt-4 mb-4 mx-4 flex items-center justify-center h-20">
    <Text className="font-semibold text-slate-400">🏝️ 이벤트가 없습니다!</Text>
  </Box>
);
