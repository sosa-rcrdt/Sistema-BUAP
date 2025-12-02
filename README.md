
# Sistema BUAP — Guía de Instalación (Frontend & Backend)

Este documento describe los pasos completos para instalar, ejecutar y desarrollar el proyecto **Sistema BUAP**, tanto en el frontend (Angular) como en el backend (Django).  
Compila instrucciones basadas en toda la documentación del proyecto.  

---

# Estructura del Proyecto

```
/sistema-buap-webapp     → Frontend Angular
/sistema_buap_api         → Backend Django
/venv                     → Entorno virtual de Python
README.md                 → Este archivo
```

---

# Requisitos Previos

## General
- Git instalado
- XAMPP (MySQL/MariaDB)
- Editor como VSCode

## Backend (Django)
- Python 3.10 o superior
- pip instalado

## Frontend (Angular)
- Node.js LTS (18 o superior)
- Angular CLI — instalar con:
```
npm install -g @angular/cli
```

---

# 1. Instalación del Backend (Django)

## 1.1 Crear entorno virtual
En la raíz del proyecto:

```
py -m venv sistema_buap
```

Activar:

### Windows PowerShell:
```
.\sistema_buap\Scripts\Activate.ps1
```

### Bash:
```
source sistema_buap/Scripts/activate
```

---

## 1.2 Instalar dependencias

Ingresar a la carpeta del backend:

```
cd sistema_buap_api
pip install -r requirements.txt
```

Verificar instalación:

```
pip list
```

---

## 1.3 Configuración de la base de datos (XAMPP)

1. Abrir PhpMyAdmin  
2. Crear base de datos:
```
sistema_buap
```

3. Revisar archivo `settings.py` → sección DATABASES.

---

## 1.4 Migrar la base de datos

```
python manage.py makemigrations
python manage.py migrate
```

---

## 1.5 Crear usuario administrador (opcional)

```
python manage.py createsuperuser
```

---

## 1.6 Ejecutar el servidor Django

```
python manage.py runserver
```

El backend correrá en:

http://127.0.0.1:8000/

---

# 2. Instalación del Frontend (Angular)

## 2.1 Instalar dependencias

Desde `/sistema-buap-webapp`:

```
npm install
```

---

## 2.2 Instalaciones adicionales utilizadas en el proyecto

### Bootstrap y JQuery (si se usan)
```
npm install bootstrap jquery --save
```

### Cookies
```
npm install ngx-cookie-service@16.1.0 --save
```

### Gráficas
```
ng add ng2-charts@4.1.1
npm install chartjs-plugin-datalabels
```

---

## 2.3 Configurar URL del backend

En:
```
/src/environments/environment.ts
```

Colocar:

```
url_api: 'http://127.0.0.1:8000'
```

---

## 2.4 Ejecutar el frontend

```
ng serve -o
```

Se abrirá en:

http://localhost:4200/

---

# 3. Conexión Frontend–Backend

### Login → usa endpoint:
```
POST /token/
```

### Total de usuarios → endpoint:
```
GET /admins-edit/
```

Todos los servicios Angular ya utilizan:
- Headers con token
- Inyección de servicios
- Rutas definidas en `environment.ts`

---

# 4. Postman (Opcional)

1. Crear colección
2. Configurar environment con:
```
base_url = http://127.0.0.1:8000
```
3. Probar:
- Login  
- CRUD de administradores, alumnos y maestros  
- Endpoint de estadísticas

---

# 5. Ejecución Completa

### Paso 1 — Iniciar MySQL (XAMPP)

### Paso 2 — Backend
```
activate venv
cd sistema_buap_api
python manage.py runserver
```

### Paso 3 — Frontend
```
cd sistema-buap-webapp
ng serve -o
```

---

# 6. Credenciales Iniciales

El sistema puede requerir creación del usuario administrador vía:
```
createsuperuser
```

O por el endpoint `POST admin/`.

---

# 7. Tecnologías Empleadas

### Frontend
- Angular 16
- Chart.js + ng2-charts
- Bootstrap
- SCSS
- ngx-cookie-service

### Backend
- Django
- Django REST Framework
- Token Authentication

---

# 8. Autoría

Este proyecto fue desarrollado con fines académicos para la materia **Desarrollo de Sitios Web (BUAP)**.  
Uso libre con fines educativos.

---

# 9. Colaboradores y Créditos

**Autor:** Nelson Ricardo Sosa Francisco  
**Profesor:** Luis Yael Méndez Sánchez (BUAP)  

Agradecimiento especial al **M.C. Luis Yael Méndez Sánchez** por el material de apoyo y la estructura original del proyecto.