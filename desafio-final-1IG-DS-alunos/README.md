# 🏋️ Desafios Finais — Lógica de Programação e Algoritmos

## 📋 Sobre os Desafios

Os desafios finais têm como objetivo integrar **todos os conceitos** vistos ao longo do curso em programas completos e funcionais.

---

## 📌 Desafio 1 — Cadastro de Membros (Academia)

### Enunciado

Desenvolva um programa em JavaScript para um sistema de academia que realize as seguintes etapas:

**Etapa 1 — Entrada de dados:**
- Receba o **nome** e a **idade** de **3 membros**
- Armazene os dados em **vetores** (arrays)
- Use um laço `for` para as entradas

**Etapa 2 — Confirmação do usuário:**
- Após a entrada, pergunte: *"Deseja visualizar a ficha dos membros? (sim/não)"*
- Use um laço `do...while` para garantir que o usuário informe uma resposta válida
- Se a resposta for inválida, exiba `"Resposta inválida! Tente novamente!"` e repita a pergunta

**Etapa 3 — Saída condicional:**
- Se a resposta for **"sim"**: exiba os dados dos 3 membros com nome, idade e **categoria**:
  - Abaixo de 18 anos → `"Juvenil"`
  - De 18 a 59 anos → `"Adulto"`
  - 60 anos ou mais → `"Melhor Idade"`
- Se a resposta for **"não"**: exiba `"Programa finalizado com sucesso!"`

### Conceitos aplicados

- Vetores (arrays)
- Laço `for` (entrada e exibição)
- Laço `do...while` (validação de resposta)
- Condicional encadeada `if...else if...else` (classificação por categoria)
- Operadores lógicos `&&` e `||` (validação da resposta)

### Exemplo de saída esperada (resposta "sim")

```
--- Membro 1 ---
Nome:       Lucas
Idade:      16 anos
Categoria:  Juvenil

--- Membro 2 ---
Nome:       Fernanda
Idade:      34 anos
Categoria:  Adulto

--- Membro 3 ---
Nome:       Seu Antônio
Idade:      65 anos
Categoria:  Melhor Idade
```

---

## 📌 Desafio 2 — Sistema de Planos de Membros (Academia)

### Enunciado

Desenvolva um programa em JavaScript para gerenciar os planos e mensalidades de uma academia:

**Etapa 1 — Cadastro:**
- Permita o cadastro de até **3 membros**
- Para cada membro, receba: **nome**, **plano (basic/plus/premium)**, **meses como membro** e **frequência semanal (dias)**
- Use **vetores paralelos** para armazenar todos os dados

**Etapa 2 — Cálculo (use funções com retorno):**
- Uma **função** `calculaMensalidade(plano, mesesAtivo)` deve calcular e retornar o valor da mensalidade:
  - Plano Basic → R$ 89,90 | Plus → R$ 139,90 | Premium → R$ 199,90
  - Membros com mais de 12 meses ganham **15% de desconto** por fidelidade
- Uma **função** `verificaStatus(mesesAtivo, frequenciaSemanal)` deve retornar o status do membro:
  - Mais de 12 meses **e** frequência ≥ 4x/semana → `"VIP"`
  - Mais de 6 meses **ou** frequência ≥ 4x/semana → `"Regular"`
  - Qualquer outro caso → `"Iniciante"`

**Etapa 3 — Exibição (use procedimentos):**
- Um **procedimento** `exibeFicha(...)` deve exibir os dados completos de cada membro
- Um **procedimento** `exibeResumo(...)` deve exibir ao final:
  - Total de membros VIP
  - Total Regular
  - Total Iniciante

### Conceitos aplicados

- Vetores paralelos (arrays)
- Laço `for` (entrada, exibição e contadores)
- Funções com `return` (calcular mensalidade e status)
- Procedimentos sem `return` (exibir ficha e resumo)
- Operadores lógicos `&&` e `||` (verificação de status)
- Condicional encadeada `if...else if...else`
- Contadores acumulados no loop

### Exemplo de saída esperada

```
FICHA — Membro 1

 Nome:           Lucas
 Plano:          PLUS
 Meses ativo:    15
 Freq. semanal:  5x/semana
 Mensalidade:    R$ 118.92
 Status:         VIP

==========================================
RESUMO GERAL — ACADEMIA

  VIP:          1 membro(s)
  Regular:      1 membro(s)
  Iniciante:    1 membro(s)
```
