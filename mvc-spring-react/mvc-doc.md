# Documentação de Padrão de Projeto MVC

> Pasifcode

Este documento é um guia que visa demonstrar como será feito o uso do padrão de projeto MVC utilizando a Stack Spring React para o desenvolvimento de projetos do grupo Pasifcode. No texto serão apresentadas as configurações básicas para a criação do projeto, os
padrões para o desenvolvimento de camadas, classes, interfaces e funções no Backend com Spring, e também o
desenvolvimento de componentes, páginas e estilização no Frontend com React.

Código Fonte 


## [Configuração do Backend](https://github.com/pasifcode/design-patterns/tree/main/mvc-base-project/backend)


| Ferramentas do Backend    | Nome                                                          |
| ------------------------- | ------------------------------------------------------------- |
| Linguagem de Programação  | [Java](https://docs.oracle.com/en/java/javase/17/)            |
| IDE                       | [IntelliJ Idea](https://www.jetbrains.com/idea/)              |
| Build                     | [Maven](https://maven.apache.org/)                            |
| Framework                 | [Spring Boot](https://spring.io/projects/spring-boot)         |
| Persistência              | [Spring Data Jpa](https://spring.io/projects/spring-data-jpa) |
| Segurança                 | [Spring Security](https://spring.io/projects/spring-security) |
| Banco de Dados em Memória | [H2 Database](https://h2database.com/html/main.html)          |
| Banco de Dados SQL        | [PostgreSQL](https://www.postgresql.org/)                     |
| Automatização de Código   | [Lombok](https://projectlombok.org/)                          |
| Teste de Requisições      | [Postman](https://www.postman.com/)                           |

### Spring Initializr

- criação do projeto através do site [Spring Initializr](https://start.spring.io/;) ou através do plugin do intellij
- adicionar configurações e dependências necessárias
- baixar, descompactar e renomear a pasta para 'backend'

![Spring Initializr](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/spring-init.png)

### IntelliJ

- codificação da backend em Java 17 ou superior

| Plugins Recomendados                                                   |
| ---------------------------------------------------------------------- |
| [GitTollBox](https://plugins.jetbrains.com/plugin/7499-gittoolbox)     |
| [Maven Helper](https://plugins.jetbrains.com/plugin/7179-maven-helper) |
| [JPA Buddy](https://plugins.jetbrains.com/plugin/15075-jpa-buddy)      |
| [Wakatime](https://plugins.jetbrains.com/plugin/7425-wakatime)         |

### [Resources](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend/src/main/resources)

- pasta que irá conter arquivos do tipo _properties_ que irão representar os perfis e o arquivo import.sql qu irá conter os scripts do banco de dados em memória

**application.properties**

- possui as propriedades para ativar um perfil

```
spring.profiles.active=test
spring.jpa.open-in-view=false
```

<br/>

**application-test.properties**

- perfil que contém as propriedades do banco de dados em memória
- as propriedades de identificação irão definir a url, o nome de usuário e a senha do banco de dados

```
# Propriedades de identicação
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=

spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

<br/>

**application-dev.properties**

- perfil que contém as propriedades do sistema banco de dados SQL
- as propriedades para geração de _scripts_ irão gerar o arquivo `create.sql` que irá conter a estrutura sql feita pela ORM do projeto junto com os dados definidos no arquivo `import.sql` (devem ser comentadas quando não forem usadas)
- as propriedades de identificação irão definir a url, o nome de usuário e a senha do banco de dados

```
# Prpriedades para geração de scripts
#spring.jpa.properties.javax.persistence.schema-generation.create-source=metadata
#spring.jpa.properties.javax.persistence.schema-generation.scripts.action=create
#spring.jpa.properties.javax.persistence.schema-generation.scripts.create-target=create.sql
#spring.jpa.properties.hibernate.hbm2ddl.delimiter=;

# Propriedades de identicação
spring.datasource.url=jdbc:postgresql://localhost:5432/base-project
spring.datasource.username=postgres
spring.datasource.password=password

spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true
spring.jpa.hibernate.ddl-auto=none
```

## [Configuração do Frontend](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend)

| Ferramentas do Frontend  | Nome                                                               |
| ------------------------ | ------------------------------------------------------------------ |
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

| Plugins Recomendados                                                                                    |
| ------------------------------------------------------------------------------------------------------- |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) |
| [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)            |
| [JSX HTML <tags/>](https://marketplace.visualstudio.com/items?itemName=angelorafael.jsx-html-tags)      |
| [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)              |
| [Wakatime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)                |

### ReactJs

- download do [Node](https://nodejs.org/en)
- criação de aplicação ReactJs com TypeScript
- nomear o app para 'frontend'
- adicionar a propriedade `"baseUrl": "./src"` em [tsconfig.json](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/tsconfig.json)

Tabela com sequência de comandos no terminal [Git Bash](https://git-scm.com/download/win). Para criar o projeto React e para instalar as bibliotecas básicas do Frontend.

| Ação                                               | Comando                                              |
| -------------------------------------------------- | ---------------------------------------------------- |
| Instalação do yarn                                 | npm install --global yarn                            |
| Cria projeto ReactJs com TypeScript                | yarn create react-app frontend --template typescript |
| Acessa a pasta frontend                            | cd frontend                                          |
| Adiciona react router para roteamento de página    | yarn add react-router-dom                            |
| Adiciona axios como biblioteca de requisições HTTP | yarn add axios                                       |
| Adiciona bootstrap como biblioteca de estilização  | yarn add bootstrap                                   |
| Adiciona moment como biblioteca de datas           | yarn add moment                                      |

### [CSS](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/mvc-base-project/frontend/src/assets/css)

- os arquivos CSS devem estar localizados em src > assets > css
- inserir _imports_ dos arquivos CSS no arquivo [index.tsx](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/index.tsx)
- inserir _imports_ do Bootstrap no CSS

# Programação Backend

O modelo de Backend que será baseado na arquitetura MVC irá conter padrões como Repository e DTO que irão definir algumas classes, interfaces, funções e testes para banco de dados e requisições. Neste tópico serão usadas entidades genéricas afim de exemplificar como é feita a codificação básica do Backend nas camadas da arquitetura MVC.

## Classes e Interfaces

### [SecurityConfig](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/config/SecurityConfig.java)

**Classe com a configuração básica de segurança do Spring para o acesso às requisições, as permissões para o banco de dados H2 e o CORS**

- anotações `@Configuration` e `@EnableWebSecurity`
- implementação da interface `WebMvcConfigurer`
- método `filterChain` para a proteção dos _endpoints_ com HTTP básico e para permitir a configuração do H2 Database
- método `addCorsMapping` para configurar o CORS padrão para mapeamento e requisições no Spring

![Security Config](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/security-config.png)

<br/>

### [Entity](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/entity)

**A classe Entity representa um modelo que possuirá uma conexão com uma tabela no banco de dados através da ORM**

- anotação `@Entity` para indicar entidade
- anotação `@Table(name = "tb_people")` para relacionar e nomear uma tabela
- atributo _id_ com as anotações `@Id` e `@GeneratedValue`
- `@Column` para personalizar as características dos atributos

![Entity](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/entity.png)

<br/>

### [Repository](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/repository)

**A interface Repository deve abstrair o acesso a dados de acordo com a sua entidade**

- anotação `@Repository` para definir como _Repository_
- estende a interface `JpaRepository<Entity, Long>` para receber os métodos da JPA.

![Repository](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/repository.png)

<br/>

### [DTO](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/dto)

**A classe DTO realiza a transferência os dados entre entre as camadas reduzindo o número de transações**

- anotação `@JsonInclude` para ocultar dados nulos na requisição Json
- anotações `@Getter` e `@NoArgsContructor`
- implementa a interface _Serializable_
- atributo `serialVersionUID` para definir a versão e a anotação `@Serial` será inclusa no atributo de versão
- construtor com os atibutos da classe _DTO_ recebendo os métodos _get_ da classe _Entity_ correspondente

![DTO](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/dto.png)

<br/>

### [Service](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf)

**A interface Service recebe a declararação de funções de lógica de negócios**

![Service](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/service.png)

<br/>

### [ServiceImpl](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl)

**A classe Controller é usada para implementa os métodos das suas respectivas interfaces do tipo Service**

- anotação `@Service` para definir como _Service_
- anotação `@Transacitional` para declarar a semântica de transação

![ServiceImpl](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/service-impl.png)

<br/>

### [Controller](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/controller)

**Classe usada como controlador da aplicação com as nuances de persistência e o mapeamento de solicitações da Web**

- anotação `@RestContoller` para definir a classe como controlador
- anotação `@RequestMapping` para mapear as solicitações
- atributo do tipo interface `Service` para a chamada dos métodos definidos na camada `Service`.

![Controller](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/controller.png)

<br/>

## Funções e Procedimentos

As funções e procedimentos básicas serão baseadas no CRUD (findAll, findById, save, update e delete) e estarão estabelecidas em 4 camadas diferentes: _Repository_, _Service_, _ServiceImpl_ e
_Controller_. 

### FindAll (Page)

- retornam uma coleção de objetos
- o tipo `Page<T>` é usado para listas paginadas e o parâmetro `Pageable pageable` possui métodos de paginação (também pode ser utilizado como uma lista comum)
- um parâmetro pode ser utilizado para realizar buscas e filtragens

| Tipo de Classe ou Interface                                                                                                                                                                                                | Declaração                                                                                                 | Anotações                                     | Retorno                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------- |
| [FindAll(Page) - Repository](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/repository/PeopleRepository.java#L15)                                                                                                                                                                                             | `Page<Entity> findEntities (Pageable pageable, String name);`                                               | @Query                                        |                                 |
| [FindAll(Page) - Service](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/PeopleService.java#L10)        | `Page<Dto> findEntities (Pageable pageable, String atr)`                                                   |                                               |                                 |
| [FindAll(Page) - ServiceImpl](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/PeopleServiceImpl.java#L28) | `Page<Dto> findEntities (Pageable pageable, String atr){}`                                                 | @Override<br/>@Transactional(readOnly = true) | return find.map(CvDto::new);    |
| [FindAll(Page) - Controller](https://github.com/Henri-BS/pasifcode-docs/blob/main/base-project/backend/src/main/java/com/pasifcode/baseproject/controller/UserController.java#L20)                                         | `ResponseEntity<Page<Dto>> findEntities (Pageable pageable, @RequestParams(defaultValue="") String atr){}` | @GetMapping                                   | return ResponseEntity.ok(page); |

<br/>

### FindById

| Tipo de Camada da Função                                                                                                                                                                                              | Declaração                                                     | Anotações                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------- |
| [FindById - Service](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/PeopleService.java#L14)       | `Dto findEntityById (Long id);`                                |                                               |
| [FindById - ServiceImpl](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/PeopleServiceImpl.java#L42) | `Dto findEntityById (Long id){}`                               | @Override<br/>@Transactional(readOnly = true) |
| [FindById - Controller](https://github.com/Henri-BS/pasifcode-docs/blob/main/base-project/backend/src/main/java/com/pasifcode/baseproject/controller/UserController.java#L26)                                         | `ResponseEntity<Dto> findEntityById (@PathVariable Long id){}` | @GetMapping                                   |

---

### Save

| Tipo de Camada da Função                                                                                                                                                                                          | Declaração                                                | Anotações    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------ |
| [Save - Service](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/PeopleService.java#L16)       | `Dto saveEntity (Dto dto);`                               |              |
| [Save - ServiceImpl](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/PeopleServiceImpl.java#L48) | `Dto saveEntity (Dto dto){}`                              | @Override    |
| [Save - Controller](https://github.com/Henri-BS/pasifcode-docs/blob/main/base-project/backend/src/main/java/com/pasifcode/baseproject/controller/UserController.java#L32)                                         | `ResponseEntity<Dto> saveEntity (@RequestBody Dto dto){}` | @PostMapping |

---

### Update

| Tipo de Camada da Função                                                                                                                                                                                            | Declaração                                                  | Anotações   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| [Update - Service](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/PeopleService.java#L18)       | `Dto updateEntity (Dto dto);`                               |             |
| [Update - ServiceImpl](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/PeopleServiceImpl.java#L60) | `Dto updateEntity (Dto dto){}`                              | @Override   |
| [Update - Controller](https://github.com/Henri-BS/pasifcode-docs/blob/main/base-project/backend/src/main/java/com/pasifcode/baseproject/controller/UserController.java#L38)                                         | `ResponseEntity<Dto> updateEntity (@RequestBody Dto dto){}` | @PutMapping |

---

### Delete

| Tipo de Camada da Função                                                                                                                                                                                            | Declaração                                    | Anotações                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------- |
| [Delete - Service](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/PeopleService.java#L20)       | `void deleteEntity (Long id);`                |                                    |
| [Delete - ServiceImpl](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/PeopleServiceImpl.java#L73) | `void deleteEntity (Long id){}`               | @Override                          |
| [Delete - Controller](https://github.com/Henri-BS/pasifcode-docs/blob/main/base-project/backend/src/main/java/com/pasifcode/baseproject/controller/UserController.java#L45)                                         | `void deleteEntity (@PathVariable Long id){}` | @DeleteMapping<br/>@ResponseStatus |

---

## Teste de Dados

### Teste com H2 Database

- visualizar e manipular dados presentes nos _scripts_ do arquivo `application-test.properties`
- interface gráfica no navegador a url: `http://localhost:8080/h2-console`

![H2 Login](https://github.com/Henri-BS/pasifcode-docs/blob/main/docs/images/h2-login.png)

- instrução do tipo `SELECT` e visualizar os registros de uma tabela

![H2 Select](https://github.com/Henri-BS/pasifcode-docs/blob/main/docs/images/h2-select.png)

- criação de um novo registro através do comando `INSERT INTO`, ao inserir um
  novo registro o banco de dados informará sobre a condição da inserção com uma mensagem.
  ![H2 Insert](https://github.com/Henri-BS/pasifcode-docs/blob/main/docs/images/h2-insert.png)

### Teste de requisições com Postman

- plaraforma de API Postman para o teste as requisições
- requições organizadas em coleções e pastas

**Requisições do tipo _GET_ ou _DELETE_**

- adicionar a URL que corresponde a operação criada no Backend e mapeada através da camada de _Controller_
- incluir parâmetros de busca na url caso necessário.
- postman retornará o resultado em formato JSON

![Postman FindAll Function](https://github.com/Henri-BS/pasifcode-docs/blob/main/docs/images/postman-all.png)

**Requisições do tipo _POST_ ou _PUT_**

- segue o mesmo processo de url e parâmetros das requisições _GET_ e _DELETE_
- selecionar a opção _Body_ no menu opções
- incluir o tipo de texto _raw_ e o formato JSON
- adicionar em formato JSON os atributos referentes ao objeto

![Postman Save Function](https://github.com/Henri-BS/pasifcode-docs/blob/main/docs/images/postman-save.png)

# Programação Frontend

O modelo de Frontend que irá representar a camada visual da arquitetura MVC, o Frontend em React irá conter os componentes em formato _tsx_ e a estilização feita em CSS em conjunto com a biblioteca Bootstrap. O padrão Observer será usado para a construção dos componentes e neste tópico também serão usadas entidades genéricas para exemplificação.


## [Requests](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/utils/requests.tsx)

**O componente request permite que a camada de Frontend possa encontrar a camada de Backend através do arquivo _requests.ts_**,

- criar caminho para o Backend chamado `BASE_URL`
- incluir a url do localhost com o backend local
- incluir operador de coalescência nula para indicar uma variável comoutra localidade em que o Backend de encontra

`export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";`

## [Types](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/types)

- os _types_ podem representar objetos, coleções paginadas ou parâmetros

## [Componentes](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/components)

### [Card](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/components/cards)

**O componente _card_ será usado como um "cartão" que irá conter informações sobre determinado conteúdo**

- criar modelo de _card_ do Bootstrap ou _cards_ personalizados através do arquivo _card.css_
- incluir _types_ para receber os dados necessários



### [Form](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/components/forms)

**O componente _form_ irá permitir que a submição se dados seja feita**

- declaração uma _Arrow Function_ chamada `handleSubmit` com a propreidade `event: React.FormEvent<HTMLFormElement>` para realizar o evento de submissão no formulário
```
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  // propriedades, configuração de requisição
}
 ```
<br>


- no `handleSubmit` deve ser declarado as variáveis _const_ referentes a cada atributo da _type_ referenciada, afim de criar um evento de inserção de valor nos campos do formulário
```
  const name = (event.target as any).name.value;
  const image = (event.target as any).image.value;
  const age = (event.target as any).age.value;
  const deptName = (event.target as any).deptName.value;
```
<br>

- uma variável _const_ do tipo `AxiosRequestConfig` para realizar a configuração da requisição através da seguintes propriedades:
  - **baseUrl** que terá a url configurada no arquivo _requests.ts_
  - **method** que definirá o método HTTP usado
  - **url** que será o caminho da função mapeada na
    camada _Controller_
  - **data** que irá corresponder aos dados presentes na _request_.
```
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "POST",
            url: "/people/save",
            data: {
                name: name,
                image: image,
                age: age,
                deptName: deptName
            }
        };
        axios(config).then(response => {
            navigate(0);
        })
    }
```
- chamar do método _axios_ para receber as configurações definidas anteriormente
- inserir uma constante para navegação de páginas da biblioteca React Routes







### [Pagination](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/components/shared/Pagination.tsx)

- componente criado na pasta de componentes _shared_ com o nome de _pagination.tsx_
- recebe uma _type_ de Page com um atributo _content_ das listas que serão paginadas
- recebe um atributo de mudança entre
  páginas

<br/>

## Páginas e Rotas

### [List](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/pages)

**implementação de uma lista paginada com um mecanismo de busca**

- criar uma constante para o número das páginas
- criar uma constante representará o texto do parâmetro de busca
- criar uma constante dedicada a _type_ da lista.

![List Consts]()

- criação um `useEffect` para permitir que o
  componente execute os efeitos necessários para a lista
- inclusão do método `axios.get().then()` que receberá a `BASE_URL`
- acrescentar url correspondente a função estabelecida na camada
  de _Controller_
- adicionar os parâmetros `pageNumber` e `value`
- criar uma _const_ chamada `handlePageChange` para definir as mudanças da página

![ListUseEffect]()

- incluir ao `return()` da função um botão para
  adicionar um novo elemento na lista
- importar o componente _Pagnation_ para os botões de paginação,
- o mecanismo de busca e a lista paginada
- criar o _modal_ do Bootstrap referente a adição de um novo conteúdo.

![List Reteurn]()


### [Profile](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/pages/PeopleProfile.tsx)

**componente Profile irá agregar outros componentes para criar um perfil específico**

- criar uma constante com o `useParams` do React Routes
- inclur o _id_ referente ao objeto do componente como parâmetro

<br/>

### [Routes](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/routes/PageRoutes.tsx)

**A interação entre as páginas poderá ser feita através das configurações com o React Routes**

- incluir as _tags_ `<BrowserRoutes>` e `<Routes>` para agregar todas as rotas
- incluir a _tag_ `<Route>` para agragrar rotas específicas
- adicionar url no atributo `path`
- adicionar o componente no atributo `element`
- criar sub-rotas interna para relacionar um _path_ a um _id_.

<br/>
