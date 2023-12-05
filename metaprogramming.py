class CustomClass:
    def __init__(self, base_class):
        class DynamicClass(base_class):
            pass
        self.dynamic_class = DynamicClass

    def print_inheritance(self):
        print("Inherited from:", self.dynamic_class.__bases__)


if __name__ == "__main__":
    custom_instance = CustomClass(list)
    print("Class Type:", type(custom_instance))
    custom_instance.print_inheritance()
