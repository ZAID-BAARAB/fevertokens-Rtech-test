# fevertokens-Rtech-test
this is a project created for technical test in the aim of joining FeverTokens company's internship in React Native Development. 


`
i used Expo, which is a set of tools and services built around React Native to simplify the development of mobile applications. 
that allows you to test your apps on real devices and also testing your app on a virtual device emulator

command to install expo
```bash
npm install -g expo-cli
```

i created this project by running command :
```bash
npx create-expo-app@latest TestTechniqueApp
``

## Task 1 :
The packages react-native-screens and react-native-safe-area-context are essential for enhancing the performance and layout of React Native applications, 
especially when using navigation libraries such as React Navigation.
```bash
npm install @react-navigation/native @react-navigation/stack
```
```bash
npm install react-native-screens react-native-safe-area-context
```

installing react-native-svg-charts 
```bash
npm install react-native-svg react-native-svg-charts
```
Axios is a promise-based HTTP client for the browser and Node.js that simplifies making asynchronous HTTP requests to REST endpoints.
i installed this library to my project using this command.
```bash
npm install axios
```



## Task 2 :

Java Code:

```Java
 public class Main {
    public static void main(String args[]) {
        
        for(int i=1; i<=100;i++){
            if(i%3==0){
                System.out.println("Hello ");
            }else if(i%5==0){
                System.out.println("World");
            }else if(i%7==0){
                System.out.println("Yoo");
            }else{
                System.out.println(i);
            }
        }
        System.out.println("Hello World!");
    }
} 
```
Output:

1
2
Hello 
4
World
Hello 
Yoo
8
Hello 
World
11
Hello 
13
Yoo
Hello 
16
17
Hello 
19
World
Hello 
22
23
Hello 
World
26
Hello 
Yoo
29
Hello 
31
32
Hello 
34
World
Hello 
37
38
Hello 
World
41
Hello 
43
44
Hello 
46
47
Hello 
Yoo
World
Hello 
52
53
Hello 
World
Yoo
Hello 
58
59
Hello 
61
62
Hello 
64
World
Hello 
67
68
Hello 
World
71
Hello 
73
74
Hello 
76
Yoo
Hello 
79
World
Hello 
82
83
Hello 
World
86
Hello 
88
89
Hello 
Yoo
92
Hello 
94
World
Hello 
97
Yoo
Hello 
World
Hello World!  

```Python
def main():
    for i in range(1, 101):
        if i % 3 == 0:
            print("Hello ")
        elif i % 5 == 0:
            print("World")
        elif i % 7 == 0:
            print("Yoo")
        else:
            print(i)
    
    print("Hello World!")

if __name__ == "__main__":
    main()
```
Output:
1 2 Hello 4 World Hello Yoo 8 Hello World 11 Hello 13 Yoo Hello 16 17 Hello 19 World Hello 22 23 Hello World 26 Hello Yoo 29 Hello 31 32 Hello 34 World Hello 37 38 Hello World 41 Hello 43 44 Hello 46 47 Hello Yoo World Hello 52 53 Hello World Yoo Hello 58 59 Hello 61 62 Hello 64 World Hello 67 68 Hello World 71 Hello 73 74 Hello 76 Yoo Hello 79 World Hello 82 83 Hello World 86 Hello 88 89 Hello Yoo 92 Hello 94 World Hello 97 Yoo Hello World Hello World!

## Task 3 :

to resolve this problem, since my car  has infinite gas this means that i can make an exhaustive search method, for this i will do the folllowing :
- i will start in my current point i will call it A  and i will drive a distance   to East lets call this initial distance "d"
- i will come to my point A 
- i drive again the distance 2d  to the West, the other direction
- i com back to point A
- i drive to the Wast again but this time i will drive 4d 
- i com back to point A
- i drive again to East 8d 

i continue like this until i find my friend's car, using this method  the covered area increases exponnentially, which makes me able to find my fiend in  Finit time




