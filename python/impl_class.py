# create a program to track dog name, dob and bark
# using oop class concept

#create class
class Dog:

#create constructor
    def __init__(self,name,month,day, year, speakText):
        self.name = name
        self.month = month
        self.day = day
        self.year = year
        self.speakText = speakText


#create assessor method that returns the speakText stored in the object.
    def speak(self):
        return self.speakText
    
#create assessor method to get name
    def get_name(self):
        return self.name

#create assessor method that uses bday info
    def birth_date(self):
        return str(self.month) + "/" + str(self.day) + "/"+ str(self.year)

#create function for change speak
    def change_speak(self,bark): 
        self.speakText =  bark

#create a new puppy
    def __add__(self,other_dog):
        return Dog("Puppy of " + self.name + " and " + other_dog.name, 
            self.month, self.day, self.year + 1, \
            self.speakText + other_dog.speakText) 
        

#create main function
def main():
    boy_dog = Dog("Mesa",5,15,2004, "WOOOOF")
    girl_dog = Dog("Sequoia",5,6,2004, "barkbark")
    print(boy_dog.speak())
    print(girl_dog.speak())
    print(boy_dog.birth_date())
    print(girl_dog.birth_date())
    boy_dog.change_speak("woofywooofy")
    print(boy_dog.speak())
    puppy = boy_dog + girl_dog
    print(puppy.speak())
    print(puppy.get_name())
    print(puppy.birth_date())

    



if __name__ == "__main__":
    main()