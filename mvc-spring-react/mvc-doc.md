# Documentação de Padrão de Projeto MVC

> Pasifcode

Este documento é um guia que visa demonstrar como será feito o uso do padrão de projeto MVC utilizando a Stack Spring React para o desenvolvimento de projetos do grupo Pasifcode. No texto serão apresentadas as configurações básicas para a criação do projeto, os
padrões para o desenvolvimento de camadas, classes, interfaces e funções no Backend com Spring, e também o
desenvolvimento de componentes, páginas e estilização no Frontend com React.
O trecho de código relacionado a cada tópico está linkado nos títulos, mas também é possível acessar o código fonte completo pelo link abaixo.

### Código Fonte: https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project

## [Configuração do Backend](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend)

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

![Spring Initializr](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/spring-init.png)

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

Classe com a configuração básica de segurança do Spring para o acesso às requisições, as permissões para o banco de dados H2 e o CORS

#### Anotações e Implementações da Classe

- anotação `@Configuration` para marcar como uma classe de configuração
- anotação `@EnableWebSecurity`
- implementação da interface `WebMvcConfigurer` para a implementação do procedimento `addCorsMapping`

#### Função filterChain

- implementar a função `SecurityFilterChain filterChain` para a proteção dos _endpoints_ com HTTP básico e para permitir a configuração do H2 Database
- o parâmetro `HttpSecurity` confugurar a segurança para solicitações HTTP e lançar um `throws Exception`
- incluir na função o argumento `http.csrf()` para utilizar o `ignoringRequestMacther()` para configurar o acesso ao H2 Console. Também será necessário acrescentar o método `authorizeHttpRequests()` para configurar a permissão do H2 Console e por fim o método `headers()` para a configuração do `FrameOptions`
- retornar o método `http.buil()`

#### Procedimento addCorsMapping

- implementar o procedimento `void addCorsMapping` para configurar o CORS padrão para mapeamento e requisições no Spring
- parâmetro `CorsRegistry registry` para os métodos de configuração do CORS
- incluir no procesimento o argumento `registry.addMapping()` para definir mapeamento com o nível de acesso. Também deve ser incuído dos argumentos `allowedOrigins()` para definir uma origem, `allowedHeaders()` para definir o header e por fim `allowedMethods()` para definir os tipos de métodos de requisição que serão aceitos

```
@Configuration
@EnableWebSecurity
public class SecurityConfig implements WebMvcConfigurer {

// Função SecurityFilterChain para
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf
                        .ignoringRequestMatchers(toH2Console())
                        .disable()
                )
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(toH2Console()).permitAll()
                        .anyRequest().permitAll()
                )
                .headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::disable));
        return http.build();
   }

   @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")
                .allowedHeaders("*");
    }
}
```

<br/>

### [Entity](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/entity)

A classe Entity representa um modelo que possuirá uma conexão com uma tabela no banco de dados através da ORM

#### Anotações

- anotação `@Getter` para adicionar os métodos _getters_ e anotação `@Setter` para adicionar os métodos _setters_
- anotação `@NoArgsConstructor` para adicionar um construtor sem argumentos e anotação `@AllArgsConstructor` para adicionar um construtor com todos os argumentos
- anotação `@Entity` para indicar entidade
- anotação `@Table(name = "tb_people")` para relacionar e nomear uma tabela

#### Atributos

- atributo _id_ com as anotações `@Id` para ter as definições de um _id_ e `@GeneratedValue` para definir a forma que o valores serão gerados
- a anotação `@Column` pode ser usada para personalizar as características dos atributos

#### Relacionamentos

- anotações `@ManyToOne` para indicar um relacionamento de muitos objetos da classe para um objeto do atributo indicado e a anotação `@JoinColumn` com o método `name` para indentificar o nome da coluna de relacionamento na classe
- anotações `@OneToMany` para indicar um relacionamento de um objeto de uma classe para muitos objetos do atributo indicado e com o método `mappedBy` para mapear o atrubuto sendo relacionado
- anotações `@OneToOne` para indicar um relacionamento de um objeto de uma classe para um objeto do atributo indicado

```
/* Anotações para os métodos get, métodos set,
construtor sem argumentos, para o construtor com todos argumentos, para definição de entidade e para definição de tabela respectivamente
*/
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_people")
public class People {

    // Atributo id para identificação da enttidade
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "people_id")
    private Long id;

    // Atributos personalizados com a anotação @Column
    @Column(name = "name", nullable = false, length = 80)
    private String name;

    @Column(name = "age")
    private Integer age;

    @Column(name = "image")
    private String image;

    // Relacionamento de muitas pessoas para um departamento
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "dept_id")
    private Dept dept;
}
```

<br/>

### [Repository](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/repository)

A interface Repository deve abstrair o acesso a dados de acordo com a sua entidade

#### Anotações e Extesõnes

- anotação `@Repository` para definir como _Repository_
- estende a interface `JpaRepository<Entity, Long>` para receber os métodos da JPA

```
@Repository
public interface PeopleRepository extends JpaRepository<People, Long> {
}
```

<br/>

### [DTO](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/dto)

A classe DTO realiza a transferência os dados entre entre as camadas reduzindo o número de transações

#### Anotações e Implementações

- anotação `@JsonInclude` para ocultar dados nulos na requisição Json
- anotação `@Getter` para adicionar os métodos _getters_
- anotação `@NoArgsConstructor` para adicionar um construtor sem argumentos
- implementar a interface _Serializable_ para realiza a serialização

#### Atributos

- atributo `serialVersionUID` para definir a versão e a anotação `@Serial` será inclusa no atributo de versão
- atributos correalionados aos atributos da classe _Entity_ e de seus relacionamentos

#### Construtor

- construtor com os atibutos da classe _DTO_ recebendo os métodos _get_ da classe _Entity_ correspondente

```

@Getter
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PeopleDto implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private Integer age;
    private String image;
    private Long deptId;
    private String deptName;

    public PeopleDto(People entity) {
        id = entity.getId();
        name = entity.getName();
        age = entity.getAge();
        image = entity.getImage();
        deptId = entity.getDept().getId();
        deptName = entity.getDept().getName();
    }
}
```

<br/>

### [Service](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf)

A interface Service recebe a declararação de funções de lógica de negócios

#### Exemplo

```
public interface PeopleService {
}
```

<br/>

### [ServiceImpl](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl)

A classe Controller é usada para implementa os métodos das suas respectivas interfaces do tipo Service

#### Anotações

- anotação `@Service` para definir como _Service_
- anotação `@Transacitional` para declarar a semântica de transação

#### Atributos

- atributo do tipo interface `Repository` para a chamada dos métodos definidos na camada `Repository`, incluir a anotação `@Autowired`

```
@Service
@Transactional
public class PeopleServiceImpl implements PeopleService {

    @Autowired
    private PeopleRepository peopleRepository;
}
```

<br/>

### [Controller](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/controller)

Classe usada como controlador da aplicação com as nuances de persistência e o mapeamento de solicitações da Web

#### Anotações

- anotação `@RestContoller` para definir a classe como controlador
- anotação `@RequestMapping` para mapear as solicitações

#### Atributos

- atributo do tipo interface `Service` para a chamada dos métodos definidos na camada `Service`, incluir a anotação `@Autowired`

#### Exemplo

```
@RestController
@RequestMapping("/people")
public class PeopleController {

    @Autowired
    private PeopleService peopleService;
}
```

<br/>

## Funções e Procedimentos

As funções e procedimentos básicas serão baseadas no CRUD (findAll, findById, save, update e delete) e estarão estabelecidas em 4 camadas diferentes: _Repository_, _Service_, _ServiceImpl_ e
_Controller_. Será usada a classe `People` para exemplificar as funções

### FindAll (Page)

A função `Page<T> findAll` é usada para listas paginadas e o parâmetro `Pageable pageable` possui métodos de paginação (também pode ser utilizado como uma lista comum) um parâmetro pode ser utilizado para realizar buscas e filtragens

#### [Repository](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/repository/PeopleRepository.java#L15)

- acrescentar o parâmetro `String name` para filtrar a lista
- acrescentar o parâmentro `Pageable pageable` para permitir os métodos de paginação
- anotação `@Query` para definir as propriedades de lista, de case e de order no SQL

```
   @Query("SELECT obj FROM People obj WHERE UPPER(obj.name)" +
            " LIKE UPPER(CONCAT('%', ?1, '%')) ORDER BY obj.name")
    Page<People> findAllPeople(String name, Pageable pageable);

```

#### [Service](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/PeopleService.java#L10)

- parâmetro `String name` para filtrar a lista
- parâmentro `Pageable pageable` para permitir os métodos de paginação

```
    Page<PeopleDto> findAllPeople(String name, Pageable pageable);

```

#### [ServiceImpl](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/PeopleServiceImpl.java#L28)

- incluir a anotação `@Override` para indicar a implementação com o método da interface
- incluir a anotação `@Transactional(readOnly = true)` para definir a transção como 'somente leitura'
- parâmetro `String name` para filtrar a lista
- parâmentro `Pageable pageable` para permitir os métodos de paginação
- criar a variável `People find` chamando o método `peopleRepository.findAllPeople(name, pageable)` da interface`PeopleRepository` como argumento

```
    @Override
    @Transactional(readOnly = true)
    public Page<PeopleDto> findAllPeople(String name, Pageable pageable) {
        Page<People> find = peopleRepository.findAllPeople(name, pageable);
        return find.map(PeopleDto::new);
    }
```

#### [Controller](https://github.com/pasifcode/design-patterns/blob/6ea4ac8bba4a75f8b4d1e9de9996c1690ce01824/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/controller/PeopleController.java#L21)

- acrescentar o `ResponseEntity<>` na declaração para definir os métodos de requisição no retorno
- anotação `@GetMapping("/page")` para mapear a função com a requisição _GET_ e acrescentar o valor do método default `name` para dar a nomenclatura da URL para a requisição da função
- acrescentar o parâmetro `String name` para filtrar a lista, acrescentar a anotação`@RequestParams` para as definições de parâmetros na requisição e incluir o método `defaultValue=""`
- acrescentar o parâmentro `Pageable pageable` para permitir os métodos de paginação
- criar a variável `People find` chamando o método `peopleRepository.findAllPeople(name, pageable)` da interface`PeopleService` como argumento
```
    @GetMapping("/page")
    ResponseEntity<Page<PeopleDto>> findAllPeople(@RequestParam(defaultValue = "") String name, Pageable pageable) {
        Page<PeopleDto> find = peopleService.findAllPeople(name, pageable);
        return ResponseEntity.ok(find);
    }

```

<br/>

### FindById

A função `findById` é usada para buscar um objeto através do id da entidade

#### [Service](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/PeopleService.java#L14)

- acrescentar o parâmetro `Long id` para encontrar a instância pelo _id_

```
    PeopleDto findPeopleById(Long id);
```

#### [ServiceImpl](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/PeopleServiceImpl.java#L42)

- incluir a anotação `@Override` para indicar a implementação com o método da interface
- incluir a anotação `@Transactional(readOnly = true)` para definir a transção como 'somente leitura'
- parâmetro `Long id` para encontrar a instância pelo _id_
- criar a variável `People find` chamando o método `peopleRepository.findById(id).orElseThrow()` da interface`PeopleRepository` como argumento

```
    @Override
    @Transactional(readOnly = true)
    public PeopleDto findPeopleById(Long id) {
        People find = peopleRepository.findById(id).orElseThrow();
        return new PeopleDto(find);
    }
```

#### [Controller](https://github.com/pasifcode/design-patterns/blob/6ea4ac8bba4a75f8b4d1e9de9996c1690ce01824/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/controller/PeopleController.java#L27)

- acrescentar o `ResponseEntity<>` na declaração para definir os métodos de requisição no retorno
- anotação `@GetMapping` para mapear a função com a requisição _GET_, acrescentar o valor do método default `name` para dar a nomenclatura da URL para a requisição da função e incluir a variável `/{id}` no fim da nomenclatura
- parâmetro `Long id` para filtrar a lista, acrescentar a anotação`@PathVariable` para como uma variável na requisição
- criar a variável `People find` chamando o método `peopleRepository.findPeoplById(id)` da interface`PeopleService` como argumento

```

@GetMapping("/{id}")
ResponseEntity<PeopleDto> findPeopleByDept(@PathVariable Long id) {
        PeopleDto find = peopleService.findPeopleById(id);
        return ResponseEntity.ok(find);
}
```

---

### Save
A função `save` é usada para adicionar um novo objeto de uma entidade

#### [Service](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/PeopleService.java#L16)

- acrescentrar o parâmetro `PeopleDto dto` para encontrar os métodos da classe _Dto_

```
        PeopleDto savePeople(PeopleDto dto);
```

#### [ServiceImpl](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/PeopleServiceImpl.java#L48)

- incluir o parâmetro `PeopleDto dto` para encontrar os métodos da classe _Dto_
- acrescentar a variável `People add` para adicionar um novo objeto usando o argumento `new People()`
- acrescentar os métodos _setters_ da variável `add` e passar o métrodos _getters_ da classe `PeopleDto` como argumento se necessário
- passa no método `add.setDept()` o argumento `dept`para encontrar o objeto `Dept` que será adicionado

```
    @Override
    public PeopleDto savePeople(PeopleDto dto) {
        Dept dept = deptRepository.findByName(dto.getDeptName());

        People add = new People();
        add.setName(dto.getName());
        add.setAge(dto.getAge());
        add.setImage(dto.getImage());
        add.setDept(dept);

        return new PeopleDto(peopleRepository.saveAndFlush(add));
    }
```

#### [Controller](https://github.com/pasifcode/design-patterns/blob/6ea4ac8bba4a75f8b4d1e9de9996c1690ce01824/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/controller/PeopleController.java#L39)

- incluir o `ResponseEntity<>` no tipo da declaração para definir os métodos de requisição no retorno
- acrescentar a anotação `@PostMapping("/save")` para mapear a função com a requisição _POST_ e acrescentar o valor do método default `name` para dar a nomenclatura da URL para a requisição da função
- acrescentar o parâmetro `PeopleDto dto` para filtrar a lista, acrescentar a anotação`@RequestBody` para definir como o corpo da requisição
- acrescentar a variável `PeopleDto add` para chamar o método `peopleSevice.savePeople(dto)`da classe PeopleService como argumento e

```
    @PostMapping("/save")
    ResponseEntity<PeopleDto> savePeople(@RequestBody PeopleDto dto) {
        PeopleDto add = peopleService.savePeople(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }
```

---

### Update
A função `updadte` é usada para atualizar os dados do objeto de uma entidade

#### [Service](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/PeopleService.java#L18)

- acrescentrar o parâmetro `PeopleDto dto` para encontrar os métodos da classe _Dto_

```
        PeopleDto updatePeople(PeopleDto dto);
```

#### [ServiceImpl](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/PeopleServiceImpl.java#L60)

- incluir o parâmetro `PeopleDto dto` para encontrar os métodos da classe _Dto_
- acrescentar a variável `People edit` para receber o método `findById` e retornar um objeto `People`
- acrescentar os métodos _setters_ da variável `edit` e passar o métrodos _getters_ da classe `PeopleDto` como argumento se necessário
- passa no método `edit.setId()` o argumento `edit.getId()`para encontrar o id do objeto que será editado
- passa no método `edit.setDept()` o argumento `dept`para encontrar o objeto `Dept` que será editado

```
   @Override
    public PeopleDto updatePeople(PeopleDto dto) {
        People edit = peopleRepository.findById(dto.getId()).orElseThrow();
        Dept dept = deptRepository.findByName(dto.getDeptName());

        edit.setId(edit.getId());
        edit.setName(dto.getName());
        edit.setAge(dto.getAge());
        edit.setImage(dto.getImage());
        edit.setDept(dept);
        return new PeopleDto(peopleRepository.save(edit));
    }
```

#### [Controller](https://github.com/pasifcode/design-patterns/blob/6ea4ac8bba4a75f8b4d1e9de9996c1690ce01824/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/controller/PeopleController.java#L45)


- incluir o `ResponseEntity<>` no tipo da declaração para definir os métodos de requisição no retorno
- acrescentar a anotação `@PuttMapping("/update")` para mapear a função com a requisição _UPDATE_ e acrescentar o valor do método default `name` para dar a nomenclatura da URL para a requisição da função
- acrescentar o parâmetro `PeopleDto dto` para filtrar a lista, acrescentar a anotação`@RequestBody` para definir como o corpo da requisição
- acrescentar a variável `PeopleDto edit` para chamar o método `peopleSevice.updatePeople(dto)`da classe PeopleService como argumento

```
    @PutMapping("/update")
    ResponseEntity<PeopleDto> updatePeople(@RequestBody PeopleDto dto) {
        PeopleDto edit = peopleService.updatePeople(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }
```


---

### Delete
A função `delete` é usada para deletar um objeto


#### [Service](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/interf/PeopleService.java#L20)

- acrescentar o parâmetro `Long id` para encontrar a instância pelo _id_

```
    void deletePeople(Long id);
```

#### [ServiceImpl](https://github.com/pasifcode/design-patterns/blob/960129bb3307fb1fb411ab47c8c61e8a3ac0f7b2/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/service/impl/PeopleServiceImpl.java#L73)

- incluir a anotação `@Override` para indicar a implementação com o método da interface
- parâmetro `Long id` para encontrar a instância pelo _id_
- chamar o método `this.peopleRepository.deleteById(id)` da interface `PeopleRepository` como argumento

```
 @Override
    public void deletePeople(Long id) {
        this.peopleRepository.deleteById(id);
    }
```

#### [Controller](https://github.com/pasifcode/design-patterns/blob/6ea4ac8bba4a75f8b4d1e9de9996c1690ce01824/mvc-spring-react/mvc-base-project/backend/src/main/java/com/pasifcode/baseproject/controller/PeopleController.java#L52)


- incluir a anotação `@DeleteMapping("/delete/{id}")` para mapear a função com a requisição _DELETE_, acrescentar o valor do método default `name` para dar a nomenclatura da URL para a requisição da função e incluir a variável `id` para indicar o id
- incluir a anotação `@ResponseStatus(HttpStatus.NO_CONTENT)` retornar um status indicandao que não há conteúdo
- acrescentar o parâmetro `Long id` para buscar pelo id, acrescentar a anotação`@PathVariable` para definir como o variável para o id na Url da requisição
- chamar o método `this.peopleSevice.deletePeople(id)`da classe `PeopleService` como argumento

```
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    void deletePeople(@PathVariable Long id) {
        this.peopleService.deletePeople(id);
    }
```

---

## Teste de Dados

### Teste com H2 Database

- visualizar e manipular dados presentes nos _scripts_ do arquivo `application-test.properties`
- interface gráfica no navegador a url: `http://localhost:8080/h2-console`

![H2 Login](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/h2-login.png)

- instrução do tipo `SELECT` e visualizar os registros de uma tabela

![H2 Select](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/h2-select.png)

- criação de um novo registro através do comando `INSERT INTO`, ao inserir um
  novo registro o banco de dados informará sobre a condição da inserção com uma mensagem.
  ![H2 Insert](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/h2-insert.png)

### Teste de requisições com Postman

- plaraforma de API Postman para o teste as requisições
- requições organizadas em coleções e pastas

**Requisições do tipo _GET_ ou _DELETE_**

- adicionar a URL que corresponde a operação criada no Backend e mapeada através da camada de _Controller_
- incluir parâmetros de busca na url caso necessário.
- postman retornará o resultado em formato JSON

![Postman FindAll Function](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/postman-all.png)

**Requisições do tipo _POST_ ou _PUT_**

- segue o mesmo processo de url e parâmetros das requisições _GET_ e _DELETE_
- selecionar a opção _Body_ no menu opções
- incluir o tipo de texto _raw_ e o formato JSON
- adicionar em formato JSON os atributos referentes ao objeto

![Postman Save Function](https://github.com/pasifcode/design-patterns/blob/main/mvc-spring-react/images/postman-save.png)

# Programação Frontend

O modelo de Frontend que irá representar a camada visual da arquitetura MVC, o Frontend em React irá conter os componentes em formato _tsx_ e a estilização feita em CSS em conjunto com a biblioteca Bootstrap. O padrão Observer será usado para a construção dos componentes e neste tópico também serão usadas entidades genéricas para exemplificação.

## [Requests](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/utils/requests.tsx)

O componente request permite que a camada de Frontend possa encontrar a camada de Backend através do arquivo _requests.ts_

#### Base Url

- criar caminho para o Backend chamado `BASE_URL`
- incluir a url do localhost com o backend local
- incluir operador de coalescência nula para indicar uma variável comoutra localidade em que o Backend de encontra

```
// Variável referente a BASE_URL
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";
```

## [Types](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/types)

As _types_ podem representar objetos, coleções paginadas ou parâmetros, elas são implementadas de forma semelhante ao formato JSON e algumas irão corresponder a classes e funções do Backend

```
// Type que representa um objeto
export type People = {
    id: number;
    name: string;
    age: number;
    image: string;
    deptId: Dept;
    deptName: string;
}

// Type que representa uma lista paginada
export type PeoplePage = {
    content?: People[];
    size?: number;
    pageNumber?: number;
    numberOfElements?: number;
    totalElements?: number;
    totalPages?: number;
    number: number;
    empty?: boolean;
    first?: boolean;
    last?: boolean;
  };

// Type que representa um propriedade para parâmetro de um objeto
  export type PeopleProps = {
    people: People;
  }
```

- o arquivo `main.ts` é responsável por _types_ genéricas
- a `type Page` no arquivo `main.ts` é usada para o componente de paginação recebendo as _types_ das listas presentes na aplicação como valor da chave `content`
- a `type Props` no arquivo `main.ts` é usada para representa um paramêtro de _id_ em um componente

```
import { Dept, DeptRelation } from "./dept";
import { People } from "./people";


// Type Page para paginação
export type Page = {
  content?: People[] | Dept[] | DeptRelation[];
  last?: boolean;
  totalElements?: number;
  totalPages?: number;
  size?: number;
  number: number;
  first?: boolean;
  numberOfElements?: number;
  empty?: boolean;
  pageNumber?: number;
};

// Type Props para parâmetros
export type Props = {
  id: string;
};

```

<br/>

## [Componentes](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/components)

### [Card](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/components/cards)

O componente _card_ será usado como um "cartão" que irá conter informações básicas sobre determinado conteúdo, o card pode ser de vários tamanhos e usadas em diferentes contextos, podendo ser tanto para listagens, quanto para um perfil específico

#### Card Médio

- criar modelo com base no _card_ do Bootstrap e personalizá-lo através do arquivo _card.css_
- incluir a `type PeopleProps` nos parâmetros do componente para receber os dados necessários

#### Retorno

- incluir o `Link` do React Routes para direcionar para a página de perfil correspondente ao link definido no arquivo de rotas
- criar um elemento para exibir o valores correspondentes as chaves definidas na _type_ referenciada

```

export function PeopleMdCard({ people }: PeopleProps) {

    return (
        <>

            // Link para o perfil correspondente ao card
            <Link to={`/people/${people.id}`} className="text-decoration-none">

            // Elemento pra inserir os dados do card
                <div className="card">
                    <img src={people.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{people.name}</h5>
                        <p className="card-text">{people.age}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
```

### [Form](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/components/forms)

O componente _form_ irá permitir que a submissão se dados relacionada deja feita

#### Variável handleSubmit

- declaração uma variável `const` chamada `handleSubmit` com a propreidade `event: React.FormEvent<HTMLFormElement>` para realizar o evento de submissão no formulário
- no `handleSubmit` deve ser declarado as variáveis _const_ referentes a cada atributo da _type_ referenciada, afim de criar um evento de inserção de valor nos campos do formulário

#### Variável config no handleSubmit

- uma variável _const_ chamada `config: AxiosRequestConfig` para realizar a configuração da requisição através da seguintes propriedades:
  - **baseUrl:** recebe a BASE*URL configurada no arquivo \_requests.ts*
  - **method:** define o método HTTP que será usado
  - **url:** é o caminho da função mapeada na
    camada _Controller_
  - **data:** corresponde aos dados presentes na requisição.
- o método _axios_ deve ser chamado para receber as configurações definidas anteriormente na _const_ `config`, o método irá retonar a _const_ navigate para a página seguir a rota indicada (o valor '0' retornará a última página navegada)

#### Retorno

- criação de um elemento form com o `onSubmit={handleSubmit}` para definir a funcionalidade de subimissão no elemento
- inserção dos elementos com campo de label e input com as propriedades de `id` contendo o nome do atributo correspondente
- inclusão de um datalist para input com umas lista de elementos para selecionar
- criar um elemnto para os botões de submissão e cancelamento da adição de um novo elemento

```
// Declaração da função de um formulário para adicionar uma pessoa
export function PeopleAddForm() {

  // Variável para retornar uma navegação por páginas
  const navigate = useNavigate();

// Variável handleSubmit para definir a subimissão
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

      // Variáveis de evento dos atributos
        const name = (event.target as any).name.value;
        const image = (event.target as any).image.value;
        const age = (event.target as any).age.value;
        const deptName = (event.target as any).deptName.value;

        // Variável config para definir as configurações de requisição
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

        // Método axios para retornar a navegação de página após a submissão
        axios(config).then(response => {
            navigate(0);
        })
    }

    return (

        // Elemento com referência do handleSubmit para submissão do formulário
        <form className=" form-container" onSubmit={handleSubmit}>

            // Elemento que representa o campo para inserção do nome de uma pessoa
            <div className="form-group">
                <label htmlFor="name">Nome Completo: </label>
                <input type="text" className="form-control" id="name" />
            </div>

            // Elemento que representa o campo para inserção da imagem de uma pessoa
            <div className="form-group">
                <label htmlFor="image">Imagem: </label>
                <input type="text" className="form-control" id="image" />
            </div>

            // Elemento que representa o campo para inserção da idade de uma pessoa
            <div className="form-group">
                <label htmlFor="age">Idade: </label>
                <input className="form-control" id="age" />
            </div>

            // Elemento Datalist com a lista de departamentos selecionáveis para uma pessoa
            <DeptDatalist />

            // Elemento para os botões de subimissão e cancelamento da adição de uma pessoa
            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Adicionar</button>
            </div>

        </form>
    );
}
```

### [Pagination](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/components/shared/Pagination.tsx)

O componente de Pagination é responsável pelas funcionalidades para página em uma lista de elementos.

#### Type PageProps

- fazer a declaração da _type_ `PageProps` para definir os atributos de paginação
- adicionar o atributo `page: Page` que contém _contents_ das possíveis listas que serão paginadas
- adicionar o atributo `onPageChange: Function` para definir a mudança entre páginas

#### Retorno

- criação de um botão para 'página anterior' através do `OnChangePage` com o método `page.number - 1`
- criação de um elemento para visualização do número da página atual através do método `page.number + 1` e a visualização do total de páginas através do método `page.totalPages`
- criação de um botão para 'próxima página' através do `OnChangePage` com o método `page.number + 1`

```
import { Page } from "types/main";


// Declaração da type PageProps com as propriedades para paginação
type PageProps = {
    page: Page;
    onPageChange: Function;
}

// Declaração da função para paginação
function Pagination({ page, onPageChange }: PageProps) {

    return (
        <nav>
            <ul className="pagination">

                // Elemento para botão de página anterior
                <li className={`page-item ${page.first ? `disable` : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number - 1)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                // Elemento para exibir a página atual e a quantidade total de páginas
                <li className={"page-item"}>
                    <span className="page-link no-hover">{page.number + 1} de {page.totalPages} </span>
                </li>

                // Elemento para botão de página seguinte
                <li className={`page-item ${page.last ? `disabled` : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number + 1)} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
```

<br/>

## Páginas e Rotas

As Páginas também são componentes, mas são caracterizadas por representarem um conjunto de componentes apresentados em uma única página e que estão relacionados a uma entidade específica. Já as Rotas são as definições feitas usando o React Router para realizar a transição entre as páginas.

### [List](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/pages/PeopleList.tsx)

Uma List(lista) representa uma página web contendo a implementação de uma lista paginada com propriedades de comamndo de paginaação e com um mecanismo de busca

#### Variáveis de busca, número da página e mudança de páginas paginação

- criar a _const_ `value` representará o texto do parâmetro de busca
- declarar a variável useState `const[pageNumber, setPageNumber]` para definir o número das páginas
- criar a _const_ `handlePageChange` para definir as mudanças da página

#### Variável useEffect de paginação, lista e busca

- declarar a variável useState `const[peoplePage, setPeoplePage]` para definir o número das páginas
- criação um `useEffect` para permitir que o
  componente execute os efeitos necessários para a lista
- inclusão do método `axios.get().then()` que receberá a `BASE_URL` e acrescentar url correspondente a função estabelecida na camada
  de _Controller_
- adicionar os parâmetros `pageNumber` e `value`

#### Retorno do componente de lista

- incluir funcionalidade com um botão para
  adicionar um novo elemento na lista
- importar o componente _Pagnation_ para os botões de paginação
- acrescentar o mecanismo de busca e a lista paginada
- criar o _modal_ do Bootstrap referente a adição de um novo conteúdo.

```
import axios from "axios";
import { PeopleMdCard } from "components/cards/PeopleCard";
import { PeopleAddForm } from "components/forms/PeopleForm";
import Pagination from "components/shared/Pagination";
import { useEffect, useState } from "react";
import { PeoplePage } from "types/people";
import { BASE_URL } from "utils/requests";


export function PeopleList() {

    // Variáveis para busca, número de página e mudança de página
    const [value, setValue] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    // Variável para paginação de uma pessoa e useEffect para buscar a página de pessoas
    const [peoplePage, setPeoplePage] = useState<PeoplePage>({ content: [], number: 0 });
    useEffect(() => {
        axios.get(`${BASE_URL}/people/page?page=${pageNumber}&name=${value}&size=20`)
            .then((response) => {
                setPeoplePage(response.data);
            });
    }, [pageNumber, value]);

    return (
        <>
            <div className="container">
                <nav className="navbar row m-0">

                    // Botão para adicionar uma nova pessoa na lista
                    <div className="col-12 col-md-4 col-xl-4 mb-2" >
                        <button data-bs-target="#addPeopleModal" data-bs-toggle="modal" className="btn btn-success">Adicionar Pessoa</button>
                    </div>

                    // Painel com os botões para paginação
                    <div className="col-12 col-md-4 col-xl-3 mt-2" >
                        <Pagination page={peoplePage} onPageChange={handlePageChange} />
                    </div>

                    // Mecanismo de busca para filtar pessoas na lista
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >
                        <div className="form-group">
                            <input
                                type="text"
                                id="value"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="form-control"
                                placeholder="buscar pessoas..."
                            />
                        </div>
                    </div>
                </nav >

                // Lista paginada de pessoas com filtragem
                <div className="row">
                    {peoplePage.content?.filter((x) =>
                        x.name.toUpperCase().includes(value.toLocaleUpperCase()))
                        .map(x => (
                            <div key={x.id} className="col-12 col-md-6 col-xl-3 mb-3">
                                <PeopleMdCard people={x} />
                            </div>
                        ))}
                </div>
            </div>

            // Modal(Pop-up) para a adição de uma nova pessoa
            <div className="modal fade" id="addPeopleModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Adicionar uma nova pessoa</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><PeopleAddForm /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

```

### [Profile](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/pages/PeopleProfile.tsx)

O componente Profile irá agregar outros componentes relacionados para criar um perfil específico

- criar uma _const_ `params = useParams()` para indicar um parâmetro de busca
- inclur o _id_ referente ao objeto do componente como parâmetro

```
import { useParams } from "react-router-dom";
import { PeopleLgCard } from "components/cards/PeopleCard";

export function PeopleProfile() {

    const params = useParams();

    return (
        <>
            <div className="container">
                <PeopleLgCard id={`${params.peopleId}`} />
            </div>
        </>
    );
}
```

### [Routes](https://github.com/pasifcode/design-patterns/tree/main/mvc-spring-react/mvc-base-project/frontend/src/routes/PageRoutes.tsx)

A interação entre as páginas poderá ser feita através das configurações com o React Routes

#### Navegação entre Rotas

- incluir as _tags_ `<BrowserRoutes>` e `<Routes>` para agregar todas as rotas

#### Criação de uma Rota

- incluir a _tag_ `<Route>` para agragrar rotas específicas
- adicionar url no atributo `path` e o componente no atributo `element`
- criar sub-rotas interna para relacionar um _path_ a um _id_

```
function PageRoutes() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>

                // Rota que leva para a página principal
                <Route path="/" element={<Home />} />

                // Página com lista de pessoas
                <Route path="/people-list" element={<PeopleList />} />

                // Página com um perfil específico de uma pessoa
                <Route path="/people" >
                    <Route path=":peopleId" element={<PeopleProfile />} />
                </Route>

                <Route path="/dept-list" element={<DeptList />} />
                <Route path="/dept" >
                    <Route path=":deptId" element={<DeptProfile />} />
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default PageRoutes;
```

<br/>
