
Pod::Spec.new do |s|
  s.name         = "RNCzImagePlaceholder"
  s.version      = "1.0.0"
  s.summary      = "RNCzImagePlaceholder"
  s.description  = "RN网络图片-带默认图"
  s.homepage     = "https://github.com/chenzhe555/react-native-cz-image-placeholder"
  s.license      = { :type => "MIT", :file => "LICENSE" }
  s.author             = { "author" => "376811578@qq.com" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/chenzhe555/react-native-cz-image-placeholder.git", :tag => s.version }
  s.source_files  = "*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  