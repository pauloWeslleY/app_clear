import { memo } from "react";
import { chakra } from "@chakra-ui/react";
import { MotionFlex, animations, useColor } from "./index";

interface ActionProps {
   title: string;
   subtitle: string;
}

export function ActionHero({ title, subtitle }: ActionProps) {
   const { ANIMATION } = animations();
   const { THEME } = useColor();

   return (
      <MotionFlex
         justify={"center"}
         bg={THEME.COLORS.ACTION_HERO_BG}
         w={"full"}
         initial={{ rotate: -45, scale: 0.1 }}
         animate={{ rotate: 0, scale: 1 }}
         // @ts-ignore no problem in operation, although type error appears.
         transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.5,
         }}
      >
         <MotionFlex
            w={{
               base: "full",
               md: "75%",
               lg: "50%",
            }}
            px={4}
            py={20}
            textAlign={{
               base: "left",
               md: "center",
            }}
            variants={ANIMATION.animationContainer}
            initial={"hidden"}
            animate={"show"}
            justify={"center"}
         >
            <chakra.span
               fontSize={{
                  base: "3xl",
                  sm: "4xl",
               }}
               fontWeight={"extrabold"}
               letterSpacing={"tight"}
               lineHeight={"shorter"}
               color={THEME.COLORS.ACTION_HERO_SPAN_COLORS}
               mb={6}
            >
               <MotionFlex variants={ANIMATION.animationItem}>
                  <chakra.span display={"block"}>{title}</chakra.span>
               </MotionFlex>
               <MotionFlex variants={ANIMATION.animationItem}>
                  <chakra.span
                     display={"block"}
                     color={THEME.COLORS.ACTION_HERO_SPAN_COLORS_2}
                  >
                     {subtitle}
                  </chakra.span>
               </MotionFlex>
            </chakra.span>
         </MotionFlex>
      </MotionFlex>
   );
}

export default memo(ActionHero);
