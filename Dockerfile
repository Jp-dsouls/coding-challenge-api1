# Usar una imagen base de Node.js
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar la carpeta src y otros archivos necesarios
COPY src ./src

# Exponer el puerto en el que la aplicación va a correr
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["node", "src/app.js"]