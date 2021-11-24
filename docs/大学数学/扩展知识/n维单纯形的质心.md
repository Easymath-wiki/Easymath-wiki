# n维单纯形的重心

<p style="color: grey;">By Sunlight-qwq</p>

**单纯形**(simplex)这个概念是三角形、四面体在高维上的扩展。

在二维中，一个三角形的重心可以表示为三个顶点坐标的算术平均；而在三维中，一个四边形的重心也可以表示为四个顶点的算术平均。我们就来探究$n$维单纯形是否具有这样的性质。

## 单纯形的概念

### 凸包

设$X$是$n$维空间$\mathbb{R}^n$上的一个点集，所有包含$X$的凸集的交集$S$，被称为$X$的**凸包**(convex hull)。

### 仿射无关

对$n$维空间$\mathbb{R}^n$上的$n+1$个点$P_1,\dots,P_{n+1}$，取向量

$$
\overrightarrow{P_1P_2},\overrightarrow{P_1P_3},\dots,\overrightarrow{P_1P_{n+1}},
$$

若这$n$个向量线性无关，则称这$n+1$个点**仿射无关**(affinely independent)或处于**一般位置**(General position)。

### 单纯形的严格定义

一个$n$维的**单纯形**(simplex)指的是$n$维以上空间中$n+1$个仿射无关的点的凸包。

有些情况下，单纯形指的是凸包的边界。

### 单纯形的举例

* 在1维、2维、3维上，单纯形分别指的是线段、三角形、四面体。
* 一个典型的$n$维单纯形是：

$$
\left\{(x_1, \dots, x_n)\in \mathbb{R}^n : x1\ge0, \dots, x_n\ge0, \frac{x_1}{a_1} + \dots + \frac{x_n}{a_n} \le 1, a_1,\dots,a_n\ge0 \right\}
$$

在2维上，这个单纯形就是直线$x/a_1+y/a_2=1$与两坐标轴所围的部分；在3维上，这个单纯形就是平面$x/a_1+y/a_2+z/a_3=1$与三个坐标平面所围部分。

## 单纯形的体积

我们先讨论一个简单的单纯形

$$
S=\left\{(x_1, \dots, x_n)\in \mathbb{R}^n : x_1\ge0, \dots, x_n\ge0, x_1 + \cdots + x_n \le 1 \right\}
$$

的体积。

显然，它可以改写为：

$$
S=\left\{ (x_1, \dots, x_n) |
0 \le x_1 \le 1,
0 \le x_2 \le 1-x_1,
0 \le x_3 \le 1-x_1-x_2,
\cdots,
0 \le x_n \le 1-x_1-\cdots-x_{n-1}
\right\}
$$

由不定积分直接计算得到：

$$
\int \limits_{S} \mathrm{d}x_1\cdots\mathrm{d}x_n = \frac{1}{n!}.
$$

而对任意的单纯形$S'$，设其顶点为$P_i(x_1, \dots, x_n)$，其中$i=1,\dots,n+1$，由于平移不改变体积，我们不妨把$P_{n+1}$平移到原点。再取向量

$$
\vec{v_1}=\overrightarrow{P_{n+1}P_1}, 
\dots, 
\vec{v_n} = \overrightarrow{P_nP_{n+1}},
$$

将其拼为一个矩阵$A$。

由向量的线性无关性，$A$满秩，所以$A$对应$\mathbb{R}^n$上的一个非退化线性变换（取标准正交基），也用$A$表示这个线性变换，那么当我们取$\vec{v_1},\dots,\vec{v_n}$为一组新基时，单纯形$S'$就可以表示为$$

$$
\left\{(y_1, \dots, y_n)\in \mathrm{span(\vec{v_1}, \dots, \vec{v_n})} : y_1\ge0, \dots, y_n\ge0, y_1 + \cdots + y_n \le 1, a_1,\dots,a_n\ge0 \right\}
$$

利用不定积分和数学归纳法，容易证明这个单纯形的体积为：

$$
\int \limits_{S'} \mathrm{d}y_1 \cdots \mathrm{d}y_n = \frac{1}{n!}.
$$

（待补充）