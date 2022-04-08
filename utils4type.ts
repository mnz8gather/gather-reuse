// 判断两个类型是否相同
type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T1>() => T1 extends B ? 1 : 2 ? true : false;
