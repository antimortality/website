const getFavicon = () => {
  let favicon = undefined;
  let nodeList = document.getElementsByTagName("link");
  for (let i = 0; i < nodeList.length; i++)
  {
    if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
    {
      favicon = nodeList[i].getAttribute("href");
    }
  }
  return favicon;
}

export default getFavicon;