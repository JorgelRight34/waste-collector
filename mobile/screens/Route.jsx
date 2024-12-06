import React, { useEffect, useState } from "react";
import { webServerUrl } from "../utils/constants";
import MyWebView from "../components/MyWebView";

const BinsRoute = () => {

    return (
        <>  
            <MyWebView
               uri={`${webServerUrl}/route/?embed=true`}
            />
        </>
    );
}

export default BinsRoute;
