# Documentação de Padrões Spring React

> Programação Web para Backend

## Sumário

- [Introdução](#introdução)
- [Estrutura do Backend](#estrutura-do-backend)
    * [Spring Initializr](#spring-initializr)
    * [IntelliJ](#intellij)
    * [Aplication Properties](#application-properties)
    * [Aplication Properties](#application-properties)
    * [Hierarqueria de Pastas do Backend](#hierarquia-de-pastas-do-backend)
- [Estrutura do Frontend](#estrutura-do-frontend)
    * [ReactJs](#reactjs)
    * [CSS](#css)
    * [Hierarqueria de Pastas do Frontend](#hierarquia-de-pastas-do-fronten)
- [Programação Backend](#programação-backend)
    * [Classes e Interfaces](#classes-e-interfaces)
        - [SecurityConfig](#security-config)
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

* [H2 Database e Postman](#h2-database-e-postman)
    - [Manipulação de Dados com H2](#manipulação-de-dados-com-h2)
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

- adicionar propriedade de ativar perfil

```
spring.profiles.active=test
spring.jpa.open-in-view=false
```

### Application Test

- arquivo com propriedades do banco de dados em memória

```
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=

spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

- ### Hierarquia de pastas do backend

- organização baseada no padrão MVC, Repository e DTO
- camadas estabelecidas: _config, entities, repositories, dto, controllers e services_
- camada _service_ contém 2 sub-camadas _interf e impl_

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

### IntelliJ

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

A tabela com sequência de comandos no terminal [Git Bash](https://git-scm.com/download/win). para criar o projeto React
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
    * método `configure` para a proteção dos _endpoints_ com HTTP básico
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

As funções e procedimentos serão definidas em 4 camadas diferentes: _Repository_, _Service_, _ServiceImpl_ e _
Controller_. O processo de construção das principais funções CRUD utilizadas no projeto será abordado com alguns
exemplos.

- #### FindAll(Page)
Funções do tipo _findAll_ irão retornar uma coleção de objetos  

| Tipo de Classe ou Interface | Declaração                                                                                       | Anotações                                     | Retorno                         |
|-----------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------|---------------------------------|
| [Interface Repository]()    | `Page <EntityClass> findEntities (Pageable pageable, String atr);`                               | @Query                                        |                                 |       
| [Interface Service]()       | `Page <DtoClass> findEntities (Pageable pageable, String atr);`                                  |                                               |                                 |
| [Classe ServiceImpl]()      | `Page <DtoClass> findEntities (Pageable pageable, String atr){}`                                 | @Override<br/>@Transactional(readOnly = true) | return find.map(CvDto::new);    |
| [Classe Controller]()       | `Page <DtoClass> findEntities (Pageable pageable, @RequestParams(defaultValue="") String atr){}` | @GetMapping                                   | return ResponseEntity.ok(page); |

<br/>

- #### FindAll(List)

| Tipo de Classe ou Interface | Declaração                                                                                       | Anotações                                     |
|-----------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [Interface Repository]()    | `Page <EntityClass> findEntities (Pageable pageable, String atr);`                               | @Query                                        | 
| [Interface Service]()       | `Page <DtoClass> findEntities (Pageable pageable, String atr);`                                  |                                               |
| [Classe ServiceImpl]()      | `Page <DtoClass> findEntities (Pageable pageable, String atr){}`                                 | @Override<br/>@Transactional(readOnly = true) |
| [Classe Controller]()       | `Page <DtoClass> findEntities (Pageable pageable, @RequestParams(defaultValue="") String atr){}` | @GetMapping                                   |

<br/>

- #### FindById

| Tipo de Classe ou Interface | Declaração                                                                                       | Anotações                                     |
|-----------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [Interface Repository]()    | `Page <EntityClass> findEntities (Pageable pageable, String atr);`                               | @Query                                        | 
| [Interface Service]()       | `Page <DtoClass> findEntities (Pageable pageable, String atr);`                                  |                                               |
| [Classe ServiceImpl]()      | `Page <DtoClass> findEntities (Pageable pageable, String atr){}`                                 | @Override<br/>@Transactional(readOnly = true) |
| [Classe Controller]()       | `Page <DtoClass> findEntities (Pageable pageable, @RequestParams(defaultValue="") String atr){}` | @GetMapping                                   |


A função _findById_ em uma interface _Service_ terá como tipo uma classe _Dto_ e terá um parâmetro de busca que será
um `Long id`.

```
// Exemplo da função findById interface Service 
    CvDto findById(Long id);
```

A função _findById_ em uma classe _ServiceImpl_ será implementada de sua interface _Service_ através da
anotação `@Override` e a anotação `@Transactional(readOnly = true)` para definir a transação apenas como leitura, também
irá chamar o método _findById_ da interface Repository.

```
// Exemplo da função findById na classe ServiceImpl
    @Override
    @Transactional(readOnly = true)
    public CvDto findById(Long id) {
        Cv find = cvRepository.findById(id).orElseThrow();
        return new CvDto(find);
    }
```

A função _findById_ em uma classe _Controller_ deverá conter a anotação `@GetMapping` com o atributo _name_ para mapear
a solicitação como _GET_, no parâmetro `Long id` deve ser adicionado a anotação `@PathVariable` para incluir o _id_
diretamente na solicitação, a função também irá chamar o método da interface _Service_ para usar como argumento,
um `ResponseEntity<>` poderá ser adicionado ao tipo do método para retornar o status como _OK_.

```
// Exemplo da função findById na classe Controller
    @GetMapping("/{id}")
    public ResponseEntity<CvDto> findById(@PathVariable Long id) {
        CvDto find = cvServiceImpl.findById(id);
        return ResponseEntity.ok(find);
    }
```

<br/>

- #### Save

| Tipo de Classe ou Interface | Declaração                                                                                       | Anotações                                     |
|-----------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [Interface Repository]()    | `Page <EntityClass> findEntities (Pageable pageable, String atr);`                               | @Query                                        | 
| [Interface Service]()       | `Page <DtoClass> findEntities (Pageable pageable, String atr);`                                  |                                               |
| [Classe ServiceImpl]()      | `Page <DtoClass> findEntities (Pageable pageable, String atr){}`                                 | @Override<br/>@Transactional(readOnly = true) |
| [Classe Controller]()       | `Page <DtoClass> findEntities (Pageable pageable, @RequestParams(defaultValue="") String atr){}` | @GetMapping                                   |


A função _save_ em uma interface _Service_ terá como tipo e como parâmetro uma classe _Dto_.

```
// Exemplo da função save na interface Service 
        CvDto saveCv(CvDto dto);
```

A função _save_ em uma classe do tipo _ServiceImpl_ será implementada de sua interface _Service_ através da
anotação `@Override`, e criará uma nova instância com os métodos _setters_ de uma respectiva classe _Entity_ junto com
os métodos _getters_ de uma classe _Dto_ correspondente como argumento.

```
// Exemplo da função save na classe ServiceImpl 
    @Override
    public CvDto saveCv(CvDto dto) {
        Cv add = new Cv();
        add.setId(dto.getId());
        add.setName(dto.getName());
        add.setJobTitle(dto.getJobTitle());
        add.setImage(dto.getImage());
        add.setPhone(dto.getPhone());
        add.setEmail(dto.getEmail());
        add.setLocation(dto.getLocation());
        add.setDescription(dto.getDescription());

        return new CvDto(cvRepository.saveAndFlush(add));
    }
```

A função _save_ em uma classe _Controller_ deverá conter a anotação `@PostMapping` com o atributo _name_ para mapear a
solicitação como _POST_, no parâmetro `Dto dto` deve ser adicionado a anotação `@RequestBody` para indicar o corpo da
requisição, a função também irá chamar o método da interface _Service_ para usar como argumento e um `ResponseEntity<>`
poderá ser adicionado para indicar o _body_ e retornar o status como _CREATE_.

```
// Exemplo da função save na classe Controller
    @PostMapping("/save")
    public ResponseEntity<CvDto> saveCv(@RequestBody CvDto dto) {
        CvDto add = cvServiceImpl.saveCv(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }
```

<br/>

- ##### Update

| Tipo de Classe ou Interface | Declaração                                                                                       | Anotações                                     |
|-----------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [Interface Repository]()    | `Page <EntityClass> findEntities (Pageable pageable, String atr);`                               | @Query                                        | 
| [Interface Service]()       | `Page <DtoClass> findEntities (Pageable pageable, String atr);`                                  |                                               |
| [Classe ServiceImpl]()      | `Page <DtoClass> findEntities (Pageable pageable, String atr){}`                                 | @Override<br/>@Transactional(readOnly = true) |
| [Classe Controller]()       | `Page <DtoClass> findEntities (Pageable pageable, @RequestParams(defaultValue="") String atr){}` | @GetMapping                                   |


A função _update_ em uma interface _Service_ terá como tipo e como parâmetro uma classe _Dto_.

```
// Exemplo da função save na interface Service 
    CvDto updateCv(CvDto dto);
```

A função _update_ em uma classe _ServiceImpl_ será implementada de sua interface _Service_ correspondente através da
anotação `@Override`, e receberá os métodos _setters_ de uma respectiva classe _Entity_ com os métodos _
getters_ de uma classe _Dto_ correspondente como argumento.

```
// Exemplo da função update na classe ServiceImpl 
    @Override
    public CvDto updateCv(CvDto dto) {
        Cv edit = cvRepository.findById(dto.getId()).orElseThrow();
        edit.setId(edit.getId());
        edit.setName(dto.getName());
        edit.setJobTitle(dto.getJobTitle());
        edit.setImage(dto.getImage());
        edit.setPhone(dto.getPhone());
        edit.setEmail(dto.getEmail());
        edit.setLocation(dto.getLocation());

        return new CvDto(cvRepository.save(edit));
    }
```

A função _update_ em uma classe _Controller_ deverá conter a anotação `@PutMapping` com o atributo _name_ para mapear a
solicitação como _PUT_, no parâmetro `Dto dto` deve ser adicionado a anotação `@RequestBody` para indicar o corpo da
requisição, a função também irá chamar o método da interface _Service_ para usar como argumento e um `ResponseEntity<>`
poderá ser adicionado para indicar o _body_ e retornar o status como _OK_.

```
// Exemplo da função save na classe Controller
    @PutMapping("/update")
    public ResponseEntity<CvDto> updateCv(@RequestBody CvDto dto) {
        CvDto edit = cvServiceImpl.updateCv(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }
```

- ##### Delete

| Tipo de Classe ou Interface | Declaração                                                                                       | Anotações                                     |
|-----------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [Interface Repository]()    | `Page <EntityClass> findEntities (Pageable pageable, String atr);`                               | @Query                                        | 
| [Interface Service]()       | `Page <DtoClass> findEntities (Pageable pageable, String atr);`                                  |                                               |
| [Classe ServiceImpl]()      | `Page <DtoClass> findEntities (Pageable pageable, String atr){}`                                 | @Override<br/>@Transactional(readOnly = true) |
| [Classe Controller]()       | `Page <DtoClass> findEntities (Pageable pageable, @RequestParams(defaultValue="") String atr){}` | @GetMapping                                   |


O procedimento _delete_ em uma interface _Service_ será do tipo _void_ e terá um parâmetro de busca que será
um `Long id`.

```
// Exemplo do procedimento delete interface Service 
    void deleteCv(Long id);
```

O procedimento _delete_ em uma classe _ServiceImpl será implementado de sua interface _Service_ através da
anotação `@Override` e terá como argumento o método _deleteById_ da interface _Repository_.

```
// Exemplo do procedimento delete na classe ServiceImpl
    @Override
    public void deleteCv(Long id) {
        this.cvRepository.deleteById(id);
    }
```

A função _delete_ em uma classe _Controller_ deverá conter a anotação `@DeleteMapping` com o atributo _name_ para mapear
a solicitação como _DELETE_ e também a anotação `@ResponseStatus` que irá mostrar o status da requisição, no
parâmetro `Long id` deve ser adicionado a anotação `@PathVariable` para incluir o _id_
diretamente na solicitação, a função também irá chamar o método da interface _Service_ para usar como argumento.

```
// Exemplo do procedimento delete na classe Controller
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCv(@PathVariable Long id) {
        this.cvServiceImpl.deleteCv(id);
    }
```

<br/>

### H2 Database e Postman

- #### Manipulação de dados com H2

    * visualizar e manipular dados presentes nos _scripts_
do arquivo `application-test.properties` 
    * interface gráfica no navegador a url: `http://localhost:8080/h2-console`

    * ![H2 Login](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/h2-login.png)
    * instrução do tipo `SELECT` e visualizar os registros de uma tabela
    * ![H2 Select](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/h2-select.png)
    * criação de um novo registro através do comando `INSERT INTO`, ao inserir um
novo registro o banco de dados informará sobre a condição da inserção com uma mensagem.
    * ![H2 Insert](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/h2-insert.png)

- #### Teste de Requisições

    * plaraforma de API Postman para o teste as requisições
    * requições organizadas em coleções e pastas

![Postman Folder](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/postman-folder.png)

Para testar uma requisição será necessário selecionar o tipo e adicionar a URL, numa requisição do tipo _GET_ deve-se
adicionar a URL que corresponde a operação criada no Backend e mapeada através da camada de _Controller_, ou seja,
deverá ser adicionado o valor atributo _name_ contida na anotação do tipo _Mapping_ da função, caso necessário também
pode-se incluir parâmetros de busca na url. Feito isso, o postman retornará o resultado em formato JSON, uma requisição
do tipo _DELETE_ segue o mesmo processo, mas retornar apenas o _status_. Abaixo um exemplo de uma requisição para buscar
todos currículos.

![Postman FindAll Function](https://github.com/Henri-BS/pasifcode-docs/base-project/blob/main/images/postman-all.png)

* em requisições do tipo _POST_ ou _PUT_ seleciona-se a opção _Body_ no menu opções 
* tipo de texto _raw_ e o formato JSON 

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
