import { FC } from "react";
import PgLogin from "../pages/Login/PgLogin";
import { PropsGroup } from "./types";

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
    return (
        <Drawer.Group>
            <Drawer.Sreen name="PgLogin" component={PgLogin}></Drawer.Sreen>
        </Drawer.Group>
    )
}