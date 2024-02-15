# Documentação de Padrões Spring React

> Pasifcode

## Sumário

- [Introdução](#introdução)
- [Estrutura do Backend](#estrutura-do-backend)
    * [Spring Initializr](#spring-initializr)
    * [IntelliJ](#intellij)
    * [Aplication Properties](#application-properties)
    * [Aplication Test Properties](#application-properties)
    * [Hierarqueria de Pastas do Backend](#hierarquia-de-pastas-do-backend)
- [Estrutura do Frontend](#estrutura-do-frontend)
    * [VS Code](#vs-code)
    * [ReactJs](#reactjs)
    * [CSS](#css)
    * [Hierarqueria de Pastas do Frontend](#hierarquia-de-pastas-do-fronten)
- [Programação Backend](#programação-backend)
    * [Classes e Interfaces](#classes-e-interfaces)
        - [SecurityConfig](#security-config)
        - [BaseEntity](#base-entity)
        - [Entity](#entity)
        - [DTO](#dto)
        - [Repository](#repository)
        - [Sevice e ServiceImpl](#service-e-serviceimpl)
        - [Controller](#controller)
    * [Funções e Procedimentos](#funções-e-procedimentos)
        - [FindAll](#findall)
        - [FindById](#findbyid)
        - [Save](#save)
        - [Update](#update)
        - [Delete](#delete)
* [Teste de dados](#teste-de-dados)
    - [Teste com H2 Database](#teste-com-h2-database)
    - [Teste de Requisições com Postman](#teste-de-requisições-com-postman)
- [Programação Frontend](#programação-frontend)
    * [Requests](#requests)
    * [Types](#types)
    * [Componentes](#componetes)
        - [Card](#card)
        - [Form](#form)
        - [Pagination](#pagination)
    * [Páginas e Rotas](#páginas-e-rotas)
        - [List](#list)
        - [Profile](#profile)
        - [Routes](#routes)

## Introdução

Este documento se refere aos padrões que serão estabelecidos para o desenvolvimento de projetos Spring React da
organização Pasifcode. No decorrer do texto serão apresentadas as configurações básicas para a criação do projeto, os
padrões para o desenvolvimento de camadas, classes, interfaces e funções no Backend com Spring, e também o
deesenvolvimento de componentes, páginas e estilização no Frontend com React.

## [Estrutura do Backend](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend)

| Ferramentas do Backend         | Nome                                                                                  |
|--------------------------------|---------------------------------------------------------------------------------------|
| Linguagem de Programação       | [Java](https://docs.oracle.com/en/java/javase/17/)                                    |
| IDE                            | [IntelliJ Idea](https://www.jetbrains.com/idea/)                                      |
| Build                          | [Maven](https://maven.apache.org/)                                                    |
| Framework                      | [Spring Boot](https://spring.io/projects/spring-boot)                                 |
| Persistência                   | [Spring Data Jpa](https://spring.io/projects/spring-data-jpa)                         |
| Ferramentas Web                | [Spring Web](https://docs.spring.io/spring-boot/docs/current/reference/html/web.html) |
| Segurança                      | [Spring Security](https://spring.io/projects/spring-security)                         |
| Banco de Dados em Memória      | [H2 Database](https://h2database.com/html/main.html)                                  |
| Banco de Dados SQL             | [PostgreSQL]()                                                                        |
| Automatização de Código        | [Lombok]()                                                                            |
| Teste de Requisições           | [Postman]()                                                                           |

### Spring Initializr

- criação do projeto através do site [Spring Initializr](https://start.spring.io/;) ou através do plugin do intellij
- adicionar configurações e dependências necessárias
- baixar, descompactar e renomear a pasta para 'backend'

![Spring Initializr](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/spring-init.png)

### IntelliJ

- codificação da backend
- Java 17

| Plugins Recomendados                                                   |
|------------------------------------------------------------------------|
| [GitTollBox](https://plugins.jetbrains.com/plugin/7499-gittoolbox)     |
| [Maven Helper](https://plugins.jetbrains.com/plugin/7179-maven-helper) |
| [JPA Buddy](https://plugins.jetbrains.com/plugin/15075-jpa-buddy)      |
| [Wakatime](https://plugins.jetbrains.com/plugin/7425-wakatime)         |

### Application Properties

* o arquivo `application.properties` adicionar propriedade para ativar um perfil

```
spring.profiles.active=test
spring.jpa.open-in-view=false
```

**Outros arquivos com o formato _properties_ irão representar perfis específicos como é o caso do `application-test.properties` e `application-dev.properties`**

* o arquivo `application-test.properties` possui as propriedades do banco de dados em memória

```
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=

spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

### Hierarquia de pastas do backend

![Backend Folders](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/backend-folders.png)

## [Estrutura do Frontend](https://github.com/Henri-BS/pasifcode-docs/base-project/tree/main/frontend)

| Ferramentas do Frontend  | Nome                                                               |
|--------------------------|--------------------------------------------------------------------|
| Linguagem de Programação | [TypeScript](https://www.typescriptlang.org/)                      |
| IDE                      | [VS Code](https://code.visualstudio.com/)                          |
| Build                    | [Yarn](https://yarnpkg.com/)                                       |
| Framework                | [ReactJs](https://pt-br.legacy.reactjs.org/)                       |
| Estilização              | [Bootstrap](https://getbootstrap.com/)                             |
| Datas e Horários         | [MomentJs](https://momentjs.com/)                                  |
| Requisições              | [Axios](https://axios-http.com/docs/intro)                         |
| Roteamento               | [React Router](https://create-react-app.dev/docs/adding-a-router/) |

### VS Code

- codificação da camada frontend

| Plugins Recomendados                                                                                     |
|----------------------------------------------------------------------------------------------------------|
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  |
| [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)             |
| [JSX HTML <tags/>](https://marketplace.visualstudio.com/items?itemName=angelorafael.jsx-html-tags)       |
| [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)               |
| [Wakatime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)                 |

### ReactJs

- download do [Node](https://nodejs.org/en)
- criação de aplicação ReactJs com TypeScript
- nomear o app para 'frontend'
- adicionar a propriedade ``"baseUrl": "./src"`` em _tsconfig.json_

Tabela com sequência de comandos no terminal [Git Bash](https://git-scm.com/download/win). para criar o projeto React
e para instalar as bibliotecas do Frontend.

| Ação                                                | Comando                                              |
|-----------------------------------------------------|------------------------------------------------------|
| Instalação do yarn                                  | npm install --global yarn                            |
| Cria projeto ReactJs com TypeScript                 | yarn create react-app frontend --template typescript |
| Acessa a pasta frontend                             | cd frontend                                          |
| Adiciona react router para roteamento de página     | yarn add react-router-dom                            |
| Adiciona axios como biblioteca de requisições HTTP  | yarn add axios                                       |
| Adiciona bootstrap como biblioteca de estilização   | yarn add bootstrap                                   |
| Adiciona moment como biblioteca de datas            | yarn add moment                                      |

### [CSS](https://github.com/Henri-BS/pasifcode-docs/base-project/tree/main/frontend/src/assets/css)

- localizados em src > assets > css
- inserir _imports_ dos arquivos CSS no arquivo _index.tsx_
- inserir _imports_ do Bootstrap no CSS

### Hierarquia de pastas do Frontend

![Frontend Folders](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/frontend-folders.png)

## Programação Backend

### Classes e Interfaces

- #### [SecurityConfig](https://github.com/Henri-BS/pasifcode-docs/base-project/tree/main/backend/src/main/java/com/pasifcode/baseproject/config/SecurityConfig.java)

    * configurações de segurança do Spring
    * anotações `@Configuration` e `@EnableWebSecurity`
    * método `filterChain` para a proteção dos _endpoints_ com HTTP básico
    * método `corsConfigurationSource` para configurar o CORS padrão do Spring

![Security Config](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/security-config.png)

<br/>

- #### [Base Entity](https://github.com/Henri-BS/pasifcode-docs/base-project/tree/main/backend/src/main/java/com/pasifcode/baseproject/entities/BaseEntity.java)

    * classe abstrata com as propriedades básicas de uma Entidade correlacionada ao banco de dados
    * atributo _id_ com as anotações `@Id` e `@GeneratedValue`
    * atributos `createdDate` para a data de criação e `lastModifiedDate` para a data de atualização da Entidade
    * atributos `createdBy` para o criador original e `lastModifiedBy` para o

![Base Entity](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/base-entity.png)

<br/>

- #### [Entity](https://github.com/Henri-BS/pasifcode-docs/base-project/tree/main/backend/src/main/java/com/pasifcode/baseproject/entities)

    * classe correlacionada a uma tabela no banco de dados
    * estende a classe _BaseEntity_
    * anotação `@Entity` para indicar entidade
    * anotação `@Table(name = "tb_name")` para relacionar e nomear uma tabela.
    * `@Column` para personalizar as características dos atributos

![Entity](https://github.com/HenriBS/pasifcode-docs/base-project/blob/main/images/entity.png)

<br/>

- #### [DTO](https://github.com/Henri-BS/pasifcode-docs/base-project/tree/main/backend/src/main/java/com/pasifcode/baseproject/dto)

    * transferir os dados entre os processos reduzindo o número de transações
    * implementa a interface _Serializable_
    * atibuto `serialVersionUID` para definir a versão e a anotação `@Serial` será inclusa no atributo de versão
    * anotação `@JsonIncluse` para ocultar dados nulos na requisição Json
    * construtor com os atibutos da classe _DTO_ recebendo os métodos _get_ da classe _Entity_ correspondente

![DTO](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/dto.png)

<br/>

- #### [Repository](https://github.com/Henri-BS/pasifcode-docs/base-project/tree/main/backend/src/main/java/com/pasifcode/baseproject/repositories)

    * anotação `@Repository` para definir como _Repository_
    * estende a interface `JpaRepository<Entity, Long>` para receber os métodos da JPA.

![Repository](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/repository.png)

<br/>

- #### [Service](https://github.com/Henri-BS/pasifcode-docs/base-project/tree/main/backend/src/main/java/com/pasifcode/baseproject/services/interf)

    * camada para declarar funções da lógica de negócios

![Service](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/service.png)

<br/>

- #### [ServiceImpl](https://github.com/Henri-BS/pasifcode-docs/base-project/tree/main/backend/src/main/java/com/pasifcode/baseproject/services/impl)

    * camada de implementação dos métodos das suas respectivas interfaces
    * anotação `@Service` para definir como _Service_
    * anotação `@Transacitional` para declarar a semântica de transação

![ServiceImpl](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/service-impl.png)

<br/>

- #### [Controller](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend/src/main/java/com/altercode/gerenciadorcurriculo/controllers)

    * controlador da aplicação vom as nuances de persistência e o mapeamento de solicitações da Web
    * anotação `@RestContoller` para definir a classe como controlador
    * anotação `@RequestMapping` para mapear as solicitações
    * atributo do tipo interface `Service` para a chamada dos métodos definidos na camada `Service`.

![ServiceImpl](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/controller.png)

<br/>

### Funções e Procedimentos

As funções e procedimentos serão definidas em 4 camadas diferentes: _Repository_, _Service_, _ServiceImpl_ e 
_Controller_. O processo de construção das principais funções CRUD utilizadas no projeto será abordado com alguns
exemplos.

#### FindAll
Funções do tipo _findAll_ irão retornar uma coleção de objetos  

| Tipo de Classe ou Interface                                                                                                                                                                                                | Declaração                                                                                                 | Anotações                                     | Retorno                         |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------|---------------------------------|
| [FindAll(Page) - Repository](https://github.com/Henri-BS/pasifcode-docs/blob/3ffb118cf3d034ad38482b3fd4b0391717816307/base-project/backend/src/main/java/com/pasifcode/baseproject/repository/UserRepository.java#L14)     | `Page<Entity> findEntities (Pageable pageable, String atr);`                                               | @Query                                        |                                 |       
| [FindAll(Page) - Service](https://github.com/Henri-BS/pasifcode-docs/blob/3ffb118cf3d034ad38482b3fd4b0391717816307/base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/UserService.java#L8)        | `Page<Dto> findEntities (Pageable pageable, String atr);`                                                  |                                               |                                 |
| [FindAll(Page) - ServiceImpl](https://github.com/Henri-BS/pasifcode-docs/blob/3ffb118cf3d034ad38482b3fd4b0391717816307/base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/UserServiceImpl.java#L22) | `Page<Dto> findEntities (Pageable pageable, String atr){}`                                                 | @Override<br/>@Transactional(readOnly = true) | return find.map(CvDto::new);    |
| [FindAll(Page) - Controller](https://github.com/Henri-BS/pasifcode-docs/blob/main/base-project/backend/src/main/java/com/pasifcode/baseproject/controller/UserController.java#L20)                                         | `ResponseEntity<Page<Dto>> findEntities (Pageable pageable, @RequestParams(defaultValue="") String atr){}` | @GetMapping                                   | return ResponseEntity.ok(page); |

<br/>

#### FindById

| Tipo de Camada da Função                                                                                                                                                                                              | Declaração                                                      | Anotações                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|-----------------------------------------------|
| [FindById - Service](https://github.com/Henri-BS/pasifcode-docs/blob/3ffb118cf3d034ad38482b3fd4b0391717816307/base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/UserService.java#L10)       | `Dto findEntityById (Long id);`                                 |                                               |
| [FindById - ServiceImpl](https://github.com/Henri-BS/pasifcode-docs/blob/3ffb118cf3d034ad38482b3fd4b0391717816307/base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/UserServiceImpl.java#L29) | `Dto findEntityById (Long id){}`                                | @Override<br/>@Transactional(readOnly = true) |
| [FindById - Controller](https://github.com/Henri-BS/pasifcode-docs/blob/main/base-project/backend/src/main/java/com/pasifcode/baseproject/controller/UserController.java#L26)                                         | `ResponseEntity<Dto> findEntityById (@PathVariable Long id){}`  | @GetMapping                                   |


<br/>

#### Save

| Tipo de Camada da Função                                                                                                                                                                                          | Declaração                                                    | Anotações    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|--------------|
| [Save - Service](https://github.com/Henri-BS/pasifcode-docs/blob/3ffb118cf3d034ad38482b3fd4b0391717816307/base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/UserService.java#L12)       | `Dto saveEntity (Dto dto);`                                   |              |
| [Save - ServiceImpl](https://github.com/Henri-BS/pasifcode-docs/blob/3ffb118cf3d034ad38482b3fd4b0391717816307/base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/UserServiceImpl.java#L35) | `Dto saveEntity (Dto dto){}`                                  | @Override    |
| [Save - Controller](https://github.com/Henri-BS/pasifcode-docs/blob/main/base-project/backend/src/main/java/com/pasifcode/baseproject/controller/UserController.java#L32)                                         | `ResponseEntity<Dto> saveEntity (@RequestBody Dto dto){}`     | @PostMapping |

<br/>

#### Update

| Tipo de Camada da Função                                                                                                                                                                                            | Declaração                                                  | Anotações   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|-------------|
| [Update - Service](https://github.com/Henri-BS/pasifcode-docs/blob/3ffb118cf3d034ad38482b3fd4b0391717816307/base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/UserService.java#L14)       | `Dto updateEntity (Dto dto);`                               |             |
| [Update - ServiceImpl](https://github.com/Henri-BS/pasifcode-docs/blob/3ffb118cf3d034ad38482b3fd4b0391717816307/base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/UserServiceImpl.java#L44) | `Dto updateEntity (Dto dto){}`                              | @Override   |
| [Update - Controller](https://github.com/Henri-BS/pasifcode-docs/blob/main/base-project/backend/src/main/java/com/pasifcode/baseproject/controller/UserController.java#L38)                                         | `ResponseEntity<Dto> updateEntity (@RequestBody Dto dto){}` | @PutMapping |

<br/>

#### Delete

| Tipo de Camada da Função                                                                                                                                                                                            | Declaração                                    | Anotações                          |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|------------------------------------|
| [Delete - Service](https://github.com/Henri-BS/pasifcode-docs/blob/3ffb118cf3d034ad38482b3fd4b0391717816307/base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/UserService.java#L16)       | `void deleteEntity (Long id);`                |                                    |
| [Delete - ServiceImpl](https://github.com/Henri-BS/pasifcode-docs/blob/3ffb118cf3d034ad38482b3fd4b0391717816307/base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/UserServiceImpl.java#L54) | `void deleteEntity (Long id){}`               | @Override                          |
| [Delete - Controller](https://github.com/Henri-BS/pasifcode-docs/blob/main/base-project/backend/src/main/java/com/pasifcode/baseproject/controller/UserController.java#L45)                                         | `void deleteEntity (@PathVariable Long id){}` | @DeleteMapping<br/>@ResponseStatus |

<br/>

### Teste de Dados

#### Teste com H2 Database

* visualizar e manipular dados presentes nos _scripts_ do arquivo `application-test.properties` 
* interface gráfica no navegador a url: `http://localhost:8080/h2-console`

![H2 Login](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/h2-login.png)

* instrução do tipo `SELECT` e visualizar os registros de uma tabela

![H2 Select](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/h2-select.png)

* criação de um novo registro através do comando `INSERT INTO`, ao inserir um
novo registro o banco de dados informará sobre a condição da inserção com uma mensagem.
![H2 Insert](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/h2-insert.png)

#### Teste de requisições com Postman

* plaraforma de API Postman para o teste as requisições
 * requições organizadas em coleções e pastas

![Postman Folder](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/postman-folder.png)

**requisições do tipo _GET_ ou _DELETE_**
* adicionar a URL que corresponde a operação criada no Backend e mapeada através da camada de _Controller_
* incluir parâmetros de busca na url caso necessário. 
* postman retornará o resultado em formato JSON

![Postman FindAll Function](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/postman-all.png)

**requisições do tipo _POST_ ou _PUT_**
* segue o mesmo processo de url e parâmetros das requisições _GET_ e _DELETE_
* selecionar a opção _Body_ no menu opções 
* incluir o tipo de texto _raw_ e o formato JSON
* adicionar em formato JSON os atributos referentes ao objeto 

![Postman Save Function](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/postman-save.png)

## Programação Frontend

### [Requests](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/frontend/src/utils/requests.tsx)

**o componente request permite que a camada de Frontend possa encontrar a camada de Backend através do arquivo _requests.ts_**, 
* criar caminho para o Backend chamado `BASE_URL` 
* incluir a url do localhost 
* incluir operador de coalescência nula para indicar outra localidade 

`export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";`

### [Types](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/frontend/src/types)

* incluir _type_ para represetar objetos
* incluir _type_ para representarem coleções paginadas
* incluir _type_ para representar parâmetros


<br/>

### Componentes

#### [Card](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/frontend/src/components/cards)

**O componente _card_ será usado como um "cartão" que irá conter informações sobre determinado conteúdo**
* criar modelo de _card_ do Bootstrap ou _cards_ personalizados através do arquivo _card.css_ 
* incluir _types_ para receber os dados necessários

<br/>

#### [Form](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/frontend/src/components/forms)

**O componente _form_ irá permitir que a submição se dados seja feita**
  * criação uma _Arrow Function_ chamada `handleSubmit` que fará evento de submissão no formulário
  * incluir constantes no `handleSubmit` referente a cada atributo da _type_ referenciada 
  * criar uma _const_ do tipo `AxiosRequestConfig` para as propriedades requisição sendo elas: 
    - **baseUrl** que terá a url configurada no arquivo _requests.ts_ 
    - **method** que definirá o método HTTP usado
    - **url** que será o caminho da função mapeada na
    camada _Controller_ 
    - **data** que irá corresponder aos dados presentes na _request_. 
  * chamar do método _axios_ para receber as configurações definidas anteriormente
  * inserir uma constante para navegação de páginas da biblioteca React Routes


<br/>

#### [Pagination](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/frontend/src/components/shared/Pagination.tsx)

  * componente criado na pasta de componentes _shared_ com o nome de _pagination.tsx_ 
  * recebe uma _type_ de Page com um atributo _content_ das listas que serão paginadas 
  * recebe um atributo de mudança entre
  páginas 
  
<br/>

### Páginas e Rotas

#### [List](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/frontend/src/pages)

  **implementação de uma lista paginada com um mecanismo de busca**
  * criar uma constante para o número das páginas 
  * criar uma constante representará o texto do parâmetro de busca 
  * criar uma constante dedicada a _type_ da lista.
  
  ![List Consts]()

  * criação um `useEffect` para permitir que o
  componente execute os efeitos necessários para a lista 
  * inclusão do método `axios.get().then()` que receberá a `BASE_URL` 
  * acrescentar url correspondente a função estabelecida na camada
  de _Controller_
  * adicionar os parâmetros `pageNumber` e `value`
  * criar uma _const_ chamada `handlePageChange` para definir as mudanças da página
  
  ![ListUseEffect]()
  
  * incluir ao `return()` da função um botão para
  adicionar um novo elemento na lista
  * importar o componente _Pagnation_ para os botões de paginação, 
  * o mecanismo de busca e a lista paginada 
  * criar o _modal_ do Bootstrap referente a adição de um novo conteúdo.

  ![List Reteurn]()

<br/>

#### [Profile](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/frontend/src/pages/CvProfile.tsx)
**componente Profile irá agregar outros componentes para criar um perfil específico**
  * criar uma constante com o `useParams` do React Routes 
  * inclur o _id_ referente ao objeto do componente como parâmetro

<br/>

#### [Routes](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/frontend/src/routes/PageRoutes.tsx)
**A interação entre as páginas poderá ser feita através das configurações com o React Routes** 
  * incluir as _tags_ `<BrowserRoutes>` e `<Routes>` para agregar todas as rotas 
  * incluir a _tag_ `<Route>` para agragrar rotas específicas
  * adicionar url no atributo `path` 
  * adicionar o componente no atributo `element` 
  * criar sub-rotas interna para relacionar um _path_ a um _id_.


<br/>
