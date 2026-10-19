# Projeto de Navegação — my-app 🚀

Este projeto é o resultado do **Ciclo Avaliativo 1** da disciplina de **Programação para Dispositivos Móveis** (Curso de ADS - Senac Rio). 

O objetivo principal foi construir e consolidar os três padrões mais utilizados de navegação em aplicações React Native utilizando o **React Navigation 7** com **Expo SDK 54**: **Stack Navigator**, **Bottom Tabs Navigator** e **Drawer Navigator**, além de implementar o desafio de **Navegadores Aninhados**.

---

## 👤 Autor

* **Aluno:** Victor Merling
* **Curso:** Análise e Desenvolvimento de Sistemas (ADS)
* **Professor:** William Firmino

---

## 📱 Tipos de Navegação Implementados

O projeto conta com a separação arquitetural clara entre as telas (`screens/`) e a lógica de rotas (`routes/`), permitindo alternar a estrutura de navegação através de uma constante condicional em `src/routes/index.jsx`.

1. **Stack Navigator (`StackRoutes`)**: Navegação em pilha (Home → Produtos) com suporte ao retorno nativo.
2. **Bottom Tabs Navigator (`BottomRoutes`)**: Barra de navegação inferior com 4 abas (*Início*, *Produtos*, *Perfil* e *Configurações*), contendo:
   - Balãozinho de notificação (*badge*) na aba de Produtos.
   - Alternância dinâmica do ícone de Perfil usando o estado `focused`.
3. **Drawer Navigator (`DrawerRoutes`)**: Menu lateral retrátil acessível pelo botão hambúrguer ☰ ou deslizando a borda da tela (*gesture handler*), contendo os 4 itens da aplicação.
4. **Desafio Opcional — Navegadores Aninhados (`"aninhado"`)**: Estrutura avançada de mercado onde o **Drawer** engloba as **Bottom Tabs**, e estas, por sua vez, englobam a **Stack**.

---

## 🛠️ Tecnologias Utilizadas

- **React Native** (v0.81) / **Expo** (SDK 54)
- **@react-navigation/native** (v7)
- **@react-navigation/native-stack**
- **@react-navigation/bottom-tabs**
- **@react-navigation/drawer**
- **react-native-gesture-handler** & **react-native-reanimated**
- **@expo/vector-icons** (MaterialIcons)

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/vctrmrlng/react-native-ciclo1.git](https://github.com/vctrmrlng/react-native-ciclo1.git)
2. **Acessar a pasta do projeto**
    cd my-app
3. **instalar as dependecias do Node.js**
    npm install
4. **Passo 4: Configurar o Modo de Navegação Desejado**
    Abra o arquivo src/routes/index.jsx no seu editor de código e altere o valor da constante TIPO_DE_NAVEGACAO para o modo que deseja testar ou apresentar. As opçoes são stack, bottom, drawer e aninhado
5. **Iniciar o Servidor do Expo**
    npx expo start 
   
