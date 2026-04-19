let V_ColorMode="light", L_ColorModeTargetsDocument=[], L_ColorModeTargetsList=[
["I_ColorModeButton","id"],
["C_text1","class"],
["C_input1","class"],
["C_button1","class"],
["C_div1","class"],
["C_div2","class"],
["body","tag"]
];
for(let i=0;i<L_ColorModeTargetsList.length;i++)
{
    let V_target=L_ColorModeTargetsList[i], V_TargetName=V_target[0], V_TargetType=V_target[1];
    if(V_TargetType=="id")
    {
        L_ColorModeTargetsDocument[i]=document.getElementById(V_TargetName);
    }
    else if(V_TargetType=="class")
    {
        L_ColorModeTargetsDocument[i]=document.getElementsByClassName(V_TargetName);
    }
    else if(V_TargetType=="tag")
    {
        L_ColorModeTargetsDocument[i]=document.getElementsByTagName(V_TargetName);
    }
}
let L_AppsList=[
    ["E-Planner",2,"My project for participation of internal shark tank activity which is about organizing things for your studies. It went quite well. Sadly, I accidentally deleted it.","Images/App1.png","https://onlinegdb.com/3d1BUVO4z","https://onlinegdb.com/3d1BUVO4z"],
    ["Tam_Chi_App",2,"My project which promotes eco-friendly. Almost done.","Images/App2.jpeg","https://www.onlinegdb.com/fork/AQX4uMAo5f","https://www.onlinegdb.com/fork/AQX4uMAo5f"],
    ["PawHaven_Project",3,"Coming soon","Images/App3.jpg","",""]
    ], L_StatusList=[
    ["deleted","f00"],
    ["discontinued","dd0"],
    ["paused","01f"],
    ["working on","0f1"]
    ];
let V_MainAppsText="";
for(let i=0;i<L_AppsList.length;i++)
{
    let L_app=L_AppsList[i], V_AppName=L_app[0], V_AppStatus=L_app[1], V_AppDesc=L_app[2], V_AppImage=L_app[3], V_AppLink=L_app[4], V_AppSourceCodeLink=L_app[5], L_status=L_StatusList[V_AppStatus], V_StatusText=L_status[0], V_StatusTextColor=L_status[1];
    V_MainAppsText+="<div class='C_MainAppBox C_div2 C_div3 C_div6 C_text1 C_text2' onclick=\"F_SetupAppPage('"+V_AppLink+"','"+V_AppSourceCodeLink+"')\">";
    V_MainAppsText+="<img class='C_MainAppLink' src='"+V_AppImage+"'>";
    V_MainAppsText+="<p class='C_MainAppName'><b>"+V_AppName+"</b></p>";
    V_MainAppsText+="<p class='C_MainAppStatus' style='color:#"+V_StatusTextColor+";'>"+V_StatusText+"</p>";
    V_MainAppsText+="<p class='C_MainAppDesc'>"+V_AppDesc+"</p>";
    V_MainAppsText+="</div>";
}
document.getElementById("I_MainPage").innerHTML=V_MainAppsText;
F_ChangeColorMode();
function F_ChangeColorMode()
{
    if(V_ColorMode=="light")
    {
        V_ColorMode="dark";
        L_ColorModeTargetsDocument[0]. innerHTML="🌙";
        for(let i=0;i<L_ColorModeTargetsDocument[1]. length;i++)
        {
            L_ColorModeTargetsDocument[1][i]. style. color="#eee";
        }
        for(let i=0;i<L_ColorModeTargetsDocument[2]. length;i++)
        {
            L_ColorModeTargetsDocument[2][i]. style. backgroundColor="#445";
            L_ColorModeTargetsDocument[2][i]. style. color="#eee";
        }
        for(let i=0;i<L_ColorModeTargetsDocument[3]. length;i++)
        {
            L_ColorModeTargetsDocument[3][i]. style. color="#eee";
            L_ColorModeTargetsDocument[3][i]. style. backgroundColor="#776";
        }
        for(let i=0;i<L_ColorModeTargetsDocument[4]. length;i++)
        {
            L_ColorModeTargetsDocument[4][i]. style. backgroundColor="#567";
        }
        for(let i=0;i<L_ColorModeTargetsDocument[5]. length;i++)
        {
            L_ColorModeTargetsDocument[5][i]. style. backgroundColor="#345";
        }
        L_ColorModeTargetsDocument[6][0]. style. backgroundImage="linear-gradient(180deg,#223,#334)";
    }
    else if(V_ColorMode=="dark")
    {
        V_ColorMode="light";
        L_ColorModeTargetsDocument[0]. innerHTML="☀️";
        for(let i=0;i<L_ColorModeTargetsDocument[1]. length;i++)
        {
            L_ColorModeTargetsDocument[1][i]. style. color="#113";
        }
        for(let i=0;i<L_ColorModeTargetsDocument[2]. length;i++)
        {
            L_ColorModeTargetsDocument[2][i]. style. backgroundColor="#eee";
            L_ColorModeTargetsDocument[2][i]. style. color="#111";
        }
        for(let i=0;i<L_ColorModeTargetsDocument[3]. length;i++)
        {
            L_ColorModeTargetsDocument[3][i]. style. color="#111";
            L_ColorModeTargetsDocument[3][i]. style. backgroundColor="#eef";
        }
        for(let i=0;i<L_ColorModeTargetsDocument[4]. length;i++)
        {
            L_ColorModeTargetsDocument[4][i]. style. backgroundColor="#eee";
        }
        for(let i=0;i<L_ColorModeTargetsDocument[5]. length;i++)
        {
            L_ColorModeTargetsDocument[5][i]. style. backgroundColor="#fff";
        }
        L_ColorModeTargetsDocument[6][0]. style. backgroundImage="linear-gradient(180deg,#eed,#ddc)";
    }
}
function F_redirect(hide, show)
{
    let V_HidePage=document.getElementById(hide), V_ShowPage=document.getElementById(show);
    V_HidePage.classList.remove("C_FadeIn");
    void V_HidePage.offsetWidth;
    V_HidePage.classList.add("C_FadeOut");
    setTimeout(() => F_FadeDelay(V_HidePage, V_ShowPage),500);
}
function F_FadeDelay(hide, show)
{
    hide. style. display="none";
    show.classList.remove("C_FadeOut");
    show.classList.add("C_FadeIn");
    show. style. display="block";
}
function F_SetupAppPage(AppUrl,SourceCodeUrl)
{
    document.getElementById("I_AppFrame").src=AppUrl;
    document.getElementById("I_AppSourceCodeLink").href=SourceCodeUrl;
    F_redirect("I_MainPage", "I_AppPage");
}