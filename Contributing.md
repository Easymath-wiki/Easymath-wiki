## Markdown规范

1. 使用加粗时，前后加上一个空格。

## 数学规范

以下规范大多也是论文的规范，养成良好的代码习惯，避免以后写论文时出错哦！

### 公式规范

1. 所有的数学公式应该放在行内公式或者行间公式区域。例如

* 正确示范：$z=x-b/4$，$f(x)=\sin x$，$P(A \cup B)$

$$
\int {\mathrm{e}}^x = {\mathrm{e}}^x + C 
$$

* 错误示范：y=kx，P(A∪B)

2. 当括号内有增大行高的结构（如分数、根号、矩阵等），括号前须加上\left和\right，例如

* 

$$
\left(\frac{a}{b}\right)^2
$$

3. 当公式作为一句话的结尾，或者公式本身就是一句话、一个表达式时，须在公式尾部加上逗号、分号或句号（有序和无序列表时，末尾可以不加标点符号），如：

* 

$$
1+1=2,\\
1\ne0.
$$

* 多项式$f(x)$和$g(x)$的首一最大公因式可以记作

$$
(f(x),g(x)).
$$

* （大括号内也要注意逗号和分号）

$$
\begin{cases}
uv=-\frac{p}{3},\\
u^3+v^3=-q;\\
\end{cases}
$$

### 字母规范

1. 表示变量、函数的单个字母，使用斜体（公式区域的字母默认是斜体），如：

* $y=f(x)$，$(f\circ g)(x)$
* $P(A \cup B)=P(A) + P(B) - P(AB)$ （这里概率$P$也是函数，$P$将集合映射为实数）
* $n$维向量空间，$a$的$x$次方

2. 表示数集、数域的字母用LaTeX的\mathbb属性，如：

* $1 \in \mathbb{N}$
* $\mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$
* 一元多项式环$\mathbb{K}[x]$，$n$维向量空间${\mathbb{K}}^n$

3. 表示人名、单词（包括用单词表示的变量、函数）、单位、化学符号的字母使用正体(\text或\mathrm)，如：

* $ 2{\text{H}}_2+{\text{O}}_2 \to 2{\text{H}_2\text{O}} $
* $ \text{Riemann}(x) $，$\text{rank}(\mathbf{A})$
* $ L = 1\ \mathrm{m}, \theta = \pi\ \mathrm{rad}$

4. 表示向量（包括数组向量、抽象向量、向量值函数）时用箭头\vec,\overrightarrow或者粗体\mathbf，表示矩阵时用粗体mathbf，如：

* $\mathbf{A}\overrightarrow{v} = \overrightarrow{b}$
* 零向量$\overrightarrow{0}$，零矩阵$\mathbf{O}$
* $\det(\mathbf{AB}) = \det(\mathbf{A})\det(\mathbf{B})$

5. 花体字母统一使用\mathscr，而不是\mathcal：

* 正确示范：线性变换$\mathscr{A}$，事件域$\mathscr{F}$
* 错误示范：$\mathcal{A}$，$\mathcal{F}$

6. 不带括号的函数和变量、数和单位之间应该相距一个空格。一般来说，LaTeX内置的函数已经自动带上空格，而数与单位之间则需要自己补上一个反斜杠+空格（“\ ”）。

* $\sin x$，$\ln x$，$\det \mathbf{M}$
* 万有引力常数的大小为$G = 6.67\times10^{-11}\ \mathrm{N \cdot m^2/kg^2}$

7. 按中国教材的习惯，微分符号$\mathrm{d}$、微分算子$\mathrm{D}$、自然对数的底$\mathrm{e}$、虚数单位$\mathrm{i}$一般使用正体，如：

* $\mathrm{i} = \sqrt{-1}$
* 

$$
\lim_{n \to \infty} \left(1 + \frac{1}{n} \right)^n = \mathrm{e}
$$

* $\mathrm{D}(x^2)=\frac{\mathrm{d}}{\mathrm{d}x}(x^2)=2x$

### 隐藏的 Latex 块

有些时候，你或许想要使用 `\renewcommand` 来自定义一些 LaTeX 命令，但是直接在数学块里定义新的 LaTeX 命令会产生一段空白。

因此，我们建议将所有 `\renewcommand` 命令都放在文章首部的一个隐藏公式块里：

```html
<div class="hidden-latex">
\[
    \renewcommand{fracx}{\displaystyle \frac}
\]
</div>
```
