> ### *思路*
>
> 1. 很正常的用定位做的双列布局，可以忽略button和h1相关，它们只是锦上添花的效果
> 2. 给left和right各加上一个before用来遮罩，然后当mouseenter和mouseleave时就给大container容器加上对应的状态类，由状态类改变左右两个盒子的宽度即可