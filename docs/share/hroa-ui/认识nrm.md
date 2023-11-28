#  nrm介绍

nrm（NPM registry manager）是一个npm源管理工具，可以用来切换npm源，也可以用来查看npm源的地址。


## 1.安装nrm
``` shell
npm i nrm -g 

```

## 2.列出npm源
``` shell
nrm ls 
```

## 3.切换npm源
``` shell
# nrm use <registry>
nrm use npm  

```

## 4.新增npm源
``` shell
# nrm add <registry> <url> [home]
nrm add kye http://npm.company.com/ 

```

## 5.删除管理的npm源
``` shell
# nrm del <registry>
nrm del kye
```

![nrm-ls](../images/npmPackage/nrm-ls.jpg)

