                                                        Bienvenidos al challenge tu gerente

### para leer mejor el documento hacer click derecho en el archivo y selecionar la opcion (Open Preview)

                                                                      introduccion
se me propuso a realizar un challenge que consistia en un drop down en el cual tenias que buscar a traves de un filtro de opciones la informacion que necesitabas encontrar, tambien tenias que poder agreagar a traves de un formulario datos sobre el nombre, razon social, nit ,telefono, codigo y esos datos serian almacenados en un servicio de firebase para posteriormente consumir esos datos almacenados y mostrarlos a traves de un filtro que busca y matchea con el resultado encontrado

                                                                Estructura del proyecto

1-filtro o opcion de busqueda

![Esta es una imagen de selector de opciones](./img/option.PNG)
--este es el selector en donde al hacer click se despegara un menu de opciones


2-barra de busqueda a traves del filtro

![Esta es una imagen de selector de opciones](./img/busqueda.PNG)
--esta barra de busqueda buscara informacion compatible con la opcion que este en el selector en este caso es por Nombre 

3-cuando una palabra se escriba en el buscador si encuentra match con alguna informacion se abrira un drop down con toda la informacion que coincida con 
lo escrito en la barra de busqueda
![Esta es una imagen de selector de opciones](./img/match.PNG)

4-el drop down mostrara al principio 10 coincidencias y si hay mas coincidencias se producira un scroll infinito que traera en 10 en 10 la informacion 

![Esta es una imagen de selector de opciones](./img/scroll.PNG)


![Esta es una imagen de selector de opciones](./img/resultados.PNG)
-- en caso que no haya coincidencia se mostrara un texto de (No hay resultados)

5-seccion de formmulario

![Esta es una imagen de selector de opciones](./img/titlePress.PNG)

--si presionas el titulo de Inserte sus Datos se abrira un cartel  formmulario para llenar los datos solicitados que en sus campos contendra la informacion del primer registro traido de firebase, en el cual podras editar, y en caso de que no hubiera registro los campos estaran vacios

![Esta es una imagen de selector de opciones](./img/Form.PNG)

-- el formmulario cuenta con dos botones uno para cerrar el cartel y otro para enviar los datos 

6-estructura final del proyecto

![Esta es una imagen de selector de opciones](./img/Complete.PNG)




