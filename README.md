# 📦 Gerenciador de Estoque

## 📖 Sobre o Projeto
Este projeto é um CRUD de Gerenciamento de Estoque, desenvolvido em Java com Spring Boot e Maven. Ele permite que os usuários:

- Adicionem novos produtos ao estoque 🆕
- Listem todos os produtos disponíveis 📋
- Atualizem informações dos produtos ✏️
- Removam produtos do estoque ❌

O sistema será acessível via API REST, podendo futuramente ser integrado a uma interface web para facilitar a usabilidade.

---

## 🛠️ Tecnologias Utilizadas
- **Java 23**
- **Spring Boot**
- **Banco de Dados PostgreSQL**
- **Maven**

---

## 📋 Requisitos Funcionais
1. **Cadastro de Produtos:**
   - Adicionar, editar, excluir e visualizar produtos.
   - Campos: nome, descrição, código de barras, categoria, quantidade em estoque, preço de custo, preço de venda, fornecedor, data de entrada.

2. **Gestão de Estoque:**
   - Atualizar quantidade de produtos (entradas e saídas).
   - Alertas de estoque mínimo e máximo.
   - Histórico de movimentações (entradas, saídas, ajustes).

3. **Cadastro de Fornecedores:**
   - Adicionar, editar, excluir e visualizar fornecedores.
   - Campos: nome, CNPJ, endereço, telefone, e-mail.

4. **Relatórios:**
   - Relatório de estoque atual.
   - Relatório de movimentações.
   - Relatório de produtos abaixo do estoque mínimo.

5. **Autenticação e Autorização:**
   - Login e logout de usuários.
   - Controle de acesso por perfil (admin, usuário comum).

6. **Busca e Filtros:**
   - Busca de produtos por nome, categoria ou código.
   - Filtros avançados para relatórios.

7. **Integração com Sistemas Externos:**
   - Importação/exportação de dados (CSV, Excel).
   - Integração com sistemas de pagamento (opcional).

---

## 🚀 Requisitos Não Funcionais
1. **Desempenho:**
   - O sistema deve suportar até 1.000 usuários simultâneos.
   - Tempo de resposta máximo de 2 segundos para operações críticas.

2. **Segurança:**
   - Criptografia de senhas.
   - Proteção contra SQL Injection e XSS.
   - Uso de HTTPS para comunicação.

3. **Escalabilidade:**
   - Capacidade de escalar horizontalmente em caso de aumento de demanda.

4. **Disponibilidade:**
   - Disponibilidade de 99,9% (uptime).

5. **Usabilidade:**
   - Interface intuitiva e responsiva (funcional em dispositivos móveis e desktops).

6. **Manutenibilidade:**
   - Código modular e documentado.
   - Uso de boas práticas de desenvolvimento (clean code, testes automatizados).

---

## 🏗️ Arquitetura
- **Arquitetura Monolítica:** Escolhida pela simplicidade e facilidade de desenvolvimento, ideal para sistemas de médio porte como este.

---

## 📅 Plano de Trabalho
1. **Semana 1:** Planejamento e Configuração do Ambiente - Express + Mongoose (para MongoDB)
2. **Semana 2:** Desenvolvimento do Módulo de Produtos.
3. **Semana 3:** Desenvolvimento do Módulo de Fornecedores - Proteção de rotas baseada em authContext.user
4. **Semana 4:** Gestão de Estoque.
5. **Semana 5:** Autenticação e Autorização.
6. **Semana 6:** Relatórios - ApexCharts + react-apexcharts para gráficos interativos || Chart.js + react-chartjs-2 para visualizações adicionais
7. **Semana 7:** Interface do Usuário - Tailwind CSS para estilização || Multer para Upload de Imagens (Lojas/Produtos)
8. **Semana 8:** Testes e Ajustes Finais.
9. **Semana 9:** Deploy e Documentação.

---

