import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon"
import React from "react"
import { ReactComponent as HookIconSVG } from "./hook.svg";

export const HookIcon = (props : SvgIconProps) => {
    return <SvgIcon {...props}>
        <HookIconSVG />
    </SvgIcon>
}