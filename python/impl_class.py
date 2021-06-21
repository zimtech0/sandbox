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


#create function to capture speak
    def speak(self):
        return self.speakText
    
#create function to get name
    def get_name(self):
        return self.name

#create function for bday
    def birth_date(self):
        return str(self.month) + "/" + str(self.day) + "/"+ str(self.year)
#create function for change speak
    def change_speak(self,bark):
        self.speakText =  bark

#create a new puppy
        

#create main function
def main():
    boy_dog = Dog("Mesa",5,15,2004, "WOOOOF")
    girl_dog = Dog("Sequoia",5,6,2004, "barkbark")
    print(boy_dog.speak())
    print(girl_dog.speak())
    



if__name__ == "__main__":
    main()