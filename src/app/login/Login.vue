<template id="template">
  <div id="login">
    <notifications group="login" />
    <div class="info-container">
      <img src="/assets/logo.png" width="80" height="80" />
      <h3 class="h3Descubre">
        Descubre el poder de la
        <br />información
      </h3>
      <h5>¡Crea tu cuenta gratis!</h5>
      <b-button variant="primary" @click="openRegister">Regístrate</b-button>

      <div class="banner2 d-flex">
        <div>
          <img src="/assets/phone.svg" alt="IOS/ANDROID" />
        </div>

        <div>
          <h3 class="H3Descarga">Descarga la app</h3>

          <div>
            <a href="https://apps.apple.com/us/app/id1495606309%26mt%3D8" target="_blank">
              <img src="/assets/images/app-store-02.svg" width="150" height="50" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.ienergybook" target="_blank">
              <img src="/assets/images/Google_play-02.svg " width="150" height="50" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <b-card id="login-container">
      <b-form @submit.prevent="login">
        <div class="logo">
          <img src="/assets/Olus-Logotipo.jpg" />
        </div>
        <h5>¡Bienvenido! Ingresa a tu cuenta</h5>
        <b-form-group id="login-user">
          <b-form-input
            type="text"
            v-model="email"
            required="required"
            placeholder="Usuario"
            autocomplete="on"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="login-password">
          <b-input-group>
            <b-form-input
              id="password"
              type="password"
              v-model="password"
              required="required"
              placeholder="Contraseña"
              autocomplete="on"
            ></b-form-input>

            <b-input-group-append>
              <b-button id="hola" @click="mostrarContrasena()" variant="link">
                <img src="/assets/ojo.svg" alt="Mostrar contraseña" width="30" height="20" />
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Iniciar Sesión</b-button>

        <div>
          <a
            href="http://ienergybook.com/Aviso%20de%20privacidad.html"
            target="_blank"
          >Checa nuestra politica de privacidad</a>
        </div>
        <div>
          <a v-b-modal.modal-1>Olvidó su contraseña?</a>
        </div>
        <br />
        <div align="left">
          <font size="1" align="left">by</font>
        </div>
        <b-row class="text-center">
          <b-col>
            <br />
            <p>
              OLUS
              <br />
              <font size="1">Version 3.05</font>
            </p>
          </b-col>
          <b-col>
            <img src="/assets/logo.png" width="80" height="80" />
          </b-col>
        </b-row>

        <!--<a>¿Olvidaste tu contraseña?</a>-->
      </b-form>
    </b-card>

    <b-modal id="modal-1" title="Olvidó su contraseña?  " @ok="handleOk">
      <b-form-group label="Correo" label-for="name-input" invalid-feedback="Correo es necesario">
        <b-form-input v-model="checkemail" class="primary" id="name-input" required></b-form-input>
      </b-form-group>

      <b-form-group
        label="Nueva contraseña"
        label-for="name-input"
        invalid-feedback="Contraseña es necesario"
      >
        <b-form-input v-model="newpassword" class="primary" id="name-input" required></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

                <script src="./login"></script>
